

const ToysHelp = () => {
    return (
        <div className="my-32">

            <h2 className="text-center text-green-400 text-6xl font-serif font-bold my-5" data-aos="fade-up">Here how it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-28 mx-10  my-10">


                <div data-aos="fade-up-left">
                    <div >
                    <img className="w-24 mx-auto" src="https://i.postimg.cc/c4XKk9Xc/settings.png" alt="" />
                    </div>
                    <h2 className="font-bold text-center text-xl font-serif">Problem-Solving and Engineering Skills</h2>
                    <p className="text-center text-lg font-serif">Playing with toy cars can also help develop problem-solving and engineering skills in children.</p>
                </div>
                <div data-aos="fade-up-left">
                    <div>
                    <img className="w-24 mx-auto" src="https://i.postimg.cc/2jdLh8WM/brainstorm.png" alt="" />
                    </div>
                    <h2 className="font-bold text-center text-xl font-serif">Spatial Awareness & Fine Motor Skills</h2>
                    <p className="text-center text-lg font-serif"> Maneuvering toy cars through various environments, such as makeshift race tracks or imaginary cities, requires spatial awareness and fine motor skills.</p>
                </div>
                <div data-aos="fade-up-left">
                    <div>
                    <img className="w-24 mx-auto" src="https://i.postimg.cc/Prtp4szx/idea.png" alt="" />
                    </div>
                    <h2 className="font-bold text-center text-xl font-serif">Customization and Personalization</h2>
                    <p className="text-center text-lg font-serif">Toy cars often come with interchangeable parts or accessories, allowing children to customize and personalize their vehicles.</p>
                </div>

            </div>

        </div>
    );
};

export default ToysHelp;