import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <h1 className='text-center'>My Blogs</h1>
            <div className="row my-5">
                <div className="col-lg-6">
                    <h2>what is the Difference between javascript and nodejs</h2>
                    <p><b>javascript </b>
                        is a programming language is JavaScript. It works in any browser that has a suitable browser engine.</p>
                    <p>Generally used for any client-side action in a web application, such as potential attribute validation or refreshing the page at a set interval, or providing certain dynamic changes in web pages without refreshing the page.</p>
                    <p>Any JavaScript engine, such as Spider Monkey (FireFox), JavaScript Core (Safari), or V8 (Internet Explorer), may run JavaScript (Google Chrome).</p>
                    <p><b>Node js </b>is a JavaScript interpreter and environment with several essential libraries that JavaScript developers can use individually.</p>
                    <p>It is primarily used for accessing or conducting any non-blocking operating system action, such as writing or executing a shell script, getting hardware-specific information, or running any backend job. rately.</p>
                    <p>Only the V8 engine, which is mostly used by Google Chrome, can execute Node JS. And any javascript programs developed with Node JS will always run in the V8 Engine.</p>
                </div>
                <div className="col-lg-6">
                    <h2>When should I use Nodejs</h2>
                    <p>Any project requires a programming environment and a runtime library that can build and/or understand your code and provides basic programming tools and assistance. Nodejs is a tool for programming in the Javascript language. Other languages with comparable tools include Python, Java, PHP, C#, C++, Go, and so on. So, if you want to develop a Javascript standalone program or server, you may utilize nodejs.</p>
                    <h2>When should I use MongoDB?</h2>
                    <p>If your application requires the capacity to save data so that it can be effectively queried or updated later, you'll almost certainly need to utilize a database. There are a slew of well-known databases. One such database is MongoDB. Other databases include MariaDB, MySql, CouchDB, DynamoDB (on AWS), and Postgres. Distinct databases have different strengths and new methods of being used, thus choosing the right/best database for what you're doing is a whole different topic.</p>
                </div>
                <div className="col-lg-6">
                    <h2>Differences between Sql and noSql databases.</h2>
                    <p><b>SQL </b>Relational databases are SQL databases.</p>
                    <p>SQL databases have a specified schema and employ structured query language.</p>
                    <p>Vertical scalability is a feature of SQL databases.</p>
                    <p>Tables are the foundation of SQL databases.</p>
                    <p>For multi-row transactions, SQL databases are preferable.</p>
                    <p><b>NoSQL </b>Non-relational databases are known as NoSQL databases.</p>
                    <p>For unstructured data, NoSQL databases use dynamic schemas.</p>
                    <p>NoSQL databases, on the other hand, are horizontally scalable.</p>
                    <p>Document, key-value, graph, and wide-column stores are all examples of NoSQL databases.</p>
                    <p>Unstructured data, such as documents or JSON, is best served by NoSQL.</p>
                </div>
                <div className="col-lg-6">
                    <h2>What is the purpose of jwt and how does it work</h2>
                    <p>JWTs are an excellent way to securely communicate information between parties since they can be signed, ensuring that the senders are who they claim to be. Furthermore, the format of a JWT allows you to check for tampering with the content.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;