import useTitle from "../../hooks/useTitle";


const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>


            <div className="hero min-h-full" style={{ backgroundImage: `url("https://i.postimg.cc/j2G52Wps/Background-2-5.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md h-60">
                        <h1 className="mb-5 text-5xl pt-20 font-bold">BLOGS</h1>
                        
                    </div>
                </div>
            </div>




            <div className="grid grid-cols-2 gap-2">


                {/* ---------------Question-1-------------------- */}
                <div className="bg-green-400 border rounded-lg p-10 m-10">
                    <h2 className="text-2xl">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <div className="divider"></div>
                    <p>An Access Token is a short-lived credential that grants access to specific resources or APIs, while a Refresh Token is a long-lived credential used to obtain new access tokens when they expire, without requiring the user to re-authenticate.</p>
                    <p>When a client successfully authenticates with an authorization server, it receives an access token and a refresh token. The access token is used to make authenticated requests to protected resources or APIs. It is typically included in the request headers or as a query parameter. If the access token expires, the client can use the refresh token to request a new access token from the authorization server. We can store them into HTTP-only COOKIES or LOCALSTORAGE</p>
                </div>

                {/* ---------------Question-2-------------------- */}
                <div className="bg-sky-400 border rounded-lg p-10 m-10">
                    <h2 className="text-2xl">Compare SQL and NoSQL databases?</h2>
                    <div className="divider"></div>
                    <div className="flex justify-around gap-5">
                        <div>
                            <p className="text-xl underline">SQL</p>
                            <li>SQL databases use a structured data model based on tables with predefined schemas. Data is organized into rows and columns, and relationships between tables are established using foreign keys.</li>
                            <li>SQL databases prioritize ACID properties, ensuring strict data integrity and transactional consistency. They use locking mechanisms to guarantee data consistency during concurrent operations.</li>

                        </div>
                        <div>
                            <p className="text-xl underline">NoSQL</p>
                            <li>NoSQL databases support various data models such as key-value, document, columnar, and graph. They offer more flexible schemas, allowing for dynamic and unstructured data.</li>
                            <li>NoSQL databases often prioritize scalability and performance over strict data consistency. They offer BASE properties, providing eventual consistency and relaxed integrity guarantees. This makes them suitable for use cases where scalability and availability are paramount.</li>

                        </div>
                    </div>
                </div>
                {/* ---------------Question-3-------------------- */}
                <div className="bg-violet-400 border rounded-lg p-10 m-10">
                    <h2 className="text-2xl">What is express js? What is Nest JS?</h2>
                    <div className="divider"></div>
                    <p><span className="font-bold">Express.js</span> is a popular web application framework for Node.js, a runtime environment for executing JavaScript code outside of a web browser. Express.js is designed to simplify the process of building web applications and APIs by providing a minimalistic and flexible set of features. <span className="font-bold"> Nest. js</span> is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js.</p>
                </div>
                {/* ---------------Question-4-------------------- */}
                <div className="bg-pink-400 border rounded-lg p-10 m-10">
                    <h2 className="text-2xl">What is MongoDB aggregate and how does it work ?</h2>
                    <div className="divider"></div>
                    <p>MongoDB aggregate method is a powerful feature that allows you to perform advanced data analysis and manipulation on collections within a MongoDB database. Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. <br />
                        Thats how it work :
                    </p>
                    <li>MongoDB receives the aggregate command with the specified pipeline stages.</li>
                    <li>The pipeline stages are processed sequentially from left to right.</li>
                    <li>Each stage takes the documents from the previous stage as input and performs its operation.</li>
                    <li>The transformed documents are then passed to the next stage in the pipeline.</li>
                    <li>This process continues until all stages have been executed, and the final result is obtained.</li>
                </div>

            </div>
        </div>
    );
};

export default Blogs;