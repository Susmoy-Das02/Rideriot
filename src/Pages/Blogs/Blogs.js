import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1>Difference between Node.JS and Javascript</h1>
            <h4> 1. NodeJS :
                NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. <br />
                2. JavaScript :
                Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
            </h4>
            <div>
                <h1>When should we use nodejs and when should we use mongodb?</h1>

                <h4>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.</h4> <br />
                <h4>MongoDB represents the data as a collection of documents rather than tables related by foreign keys. This makes it possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node. js.</h4>
            </div>

            <div>
                <h1>Differences between sql and nosql databases.</h1>
                <h4>1.	SQL databases are relational, NoSQL databases are non-relational. <br />
                    2.	SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />

                    3.	SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />

                    4.	SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />

                    5.	SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
                </h4>
            </div>

            <div>
                <h1>What is the purpose of jwt and how does it work?</h1>
                <h4>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.

                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                </h4>
            </div>


        </div>
    );
};

export default Blogs;