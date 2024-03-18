import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { signUpBody, signInBody, createPostBody, updatePostBody } from '@sincerelyyyash/common-app'


const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string,
	},
  Variables: {
    userId: number,
    id: number,
  }
}>()

//Auth middleware for blogs
app.use('/api/v1/blog/*', async(c,next)=>{
  const header = c.req.header("authorization") || "";

  const token = header.split(" ")[1]

  const response = await verify(token, c.env.JWT_SECRET)
  if(!response){
    c.status(401);
    return c.json({
      error: "Unauthorized"
    })
  }
  c.set('userId', response.id);
  await next();
})


//Signup route
app.post('/api/v1/signup',async(c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();
  const { success } = signUpBody.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}

  try {
    const user = await prisma.user.create({
      data:{
        email: body.email,
        password: body.password,
        name: body.name
      },
    })

    const jwt = await sign({ id: user.id}, c.env.JWT_SECRET);
    return c.json({jwt})

  } catch (error) {
    return c.json({
      error: "Error while signing up new user"
    });
  }
})


//SignIn Route
app.post('/api/v1/signin', async(c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();
  const { success } = signInBody.safeParse(body);
	if (!success) {
		c.status(400);
		return c.json({ error: "invalid input" });
	}

  try {
    const user = await prisma.user.findUnique({
      where:{
        email: body.email,
        password: body.password
      }
    })

    if(!user){
      c.status(403);
      return c.json({
        error: "Error while logging in"
      })
    }

    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({jwt})
  } catch (error) {
    return c.json({
      Error: "Error while logging In"
    });
  }
})

//Add new blog Route
app.post('/api/v1/blog', async(c) => {
  const userId = c.get('userId');
  
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate())

  const body = await c.req.json();



  // const { success } = createPostBody.safeParse(body);
	// if (!success) {
	// 	c.status(400);
	// 	return c.json({ error: "invalid input" });
	// }


  try {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId
      }
    });
  
    return c.json({
      id: post.id
    })
  } catch (error) {
    return c.json({
      error: "Error Creating blog post"
    })
  }
})


//Update blog route
app.put('/api/v1/blog', async(c) => {
  const userId = c.get('userId');
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();
  // const { success } = updatePostBody.safeParse(body);
	// if (!success) {
	// 	c.status(400);
	// 	return c.json({ error: "invalid input" });
	// }

  try {
    prisma.post.update({
      where:{
        id: body.id,
        authorId: userId,
      },
      data:{
        title: body.title,
        content: body.content
      }
    })
    return c.text('Post Updated')
  } catch (error) {
    error: "Post updation failed!"
  }

})

//Get Blog by ID Route
app.get('/api/v1/blog/:id', async(c) => {
  const id = c.req.param('id');

  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
  
    const post = await prisma.post.findUnique({
      where:{
        id: Number(id)
      }
    });
    return c.json({post});
  
  } catch (error) {
    error: "Error while fetching post"
  }
})

//Get all blogs
app.get('/api/v1/bulk', async (c) => {
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const posts = await prisma.post.findMany({
      select: {
          content: true,
          title: true,
          id: true,
          author: {
              select: {
                  name: true
              }
          }
      }
  });

  return c.json({
      posts
  })
  } catch (error) {
    message: 'Cannot get all posts'
  }
})


export default app
