import React from 'react';
import {Helmet} from "react-helmet";

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>cognitivewonders | blogs</title>
            </Helmet>
            <div className="container mx-auto">
                <div className="py-8">
                    <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Question 1</h2>
                        <p className="mb-4">
                            What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        </p>
                        <p className="mb-2 font-semibold">Answer:</p>
                        <p>
                            Access token is used for user access and refresh token is used for get access token when it expired. When a user logs in or authenticates for the first time, the authentication server generates an access token and a refresh token. The access token is returned to the client and is included in subsequent API requests to authenticate the user. The server validates the access token and grants access to protected resources if the token is valid and has the necessary permissions.
                            Access tokens and refresh tokens must be stored securely in Cookies, Browser's Web Storage API, Token-based storage, In-memory storage on the client-side to prevent unauthorized access. Here are some common storage options:
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Question 2</h2>
                        <p className="mb-4">
                            Compare SQL and NoSQL databases?
                        </p>
                        <p className="mb-2 font-semibold">Answer:</p>
                        <p>
                            SQL databases follow a structured data model based on tables and predefined schemas. They are well-suited for applications with complex relationships and structured data. SQL databases typically scale vertically, meaning they require more powerful hardware to handle increased data and traffic.
                        </p>
                        <p>
                            On the other hand, NoSQL databases use various data models such as key-value pairs, documents, wide-column stores, or graphs. They provide more flexibility and scalability options compared to SQL databases. NoSQL databases are designed for horizontal scalability, allowing them to distribute data across multiple servers or clusters.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Question 3</h2>
                        <p className="mb-4">
                            What is express js? What is Nest JS?
                        </p>
                        <p className="mb-2 font-semibold">Answer:</p>
                        <p>
                            Express.js is a popular web application framework for Node.js. It provides a minimalist, flexible, and unopinionated approach to building web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, and middleware integration. It allows developers to define routes, handle requests and responses, manage cookies, and implement various middleware functionalities. Express.js is known for its simplicity, lightweight nature, and vast ecosystem of middleware and extensions, making it a popular choice for building web applications and APIs in Node.js.
                        </p>
                        <p>
                            Nest.js, on the other hand, is a progressive Node.js framework for building scalable and maintainable server-side applications. It is built with TypeScript and takes inspiration from Angular and other similar frameworks. Nest.js aims to provide an organized and structured architecture for building server-side applications using modern JavaScript and TypeScript features. It incorporates features like dependency injection, decorators, modules, and powerful CLI tools, which enhance developer productivity and enable efficient application development.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Question 4</h2>
                        <p className="mb-4">
                            What is MongoDB aggregate and how does it work?
                        </p>
                        <p className="mb-2 font-semibold">Answer:</p>
                        <p>
                            In MongoDB, the aggregate function is a powerful feature that allows us to perform complex data aggregation operations on collections. It enables us to process and transform the data within the database itself, rather than retrieving all the data and performing computations on the client side.

                            The aggregate function in MongoDB works by creating a pipeline of stages that are executed in sequence. Each stage in the pipeline performs a specific operation on the data and passes the results to the next stage.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;