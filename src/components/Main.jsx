import home from '../img/home-mealcook.png'
import about from '../img/about.png'
import benefit from '../img/benefit.png' 
import pancakes from '../img/pancakes.jpg'
import salad from '../img/salad.jpg'
import meat from '../img/meat.jpg'
import letcook from '../img/lets-cook.png'

export default function Main() {
    return (
        <div className="container">
            <section id="home">
                {/* this is a home section */}
                <div className="row mg-home">
                    <div className="col-sm-12 col-md-6 mg-title">
                        <img className="w-100 home-logo"src={home} alt="home-mealcook.png"/>
                    </div>
                   
                   <div className="col-sm-12 col-md-6 mg-title">
                          <h1 className="text-center home-title">Make Your Cook Like Famous Best Chef</h1>
                   </div>
                </div>
            </section>

            <section id="about">
                {/* This is a about section */}
                <div className="row mg-about">
                    <div className="col-12 text-center">
                       <h1 className="title-section">What is mealcook?</h1>
                       <p className="mt-3">mealcook is a website which available some recipes of cookie from famous chefs work in best restaurant's in the world. In here, you can cook like restauran menu 5 start</p>
                    </div>

                    <div className="col-12 text-center">
                        <img className="w-100"src={about} alt="about.png"/>
                    </div>
                </div>
                
            </section>

            <section id="benefit">
              <div>
                  {/* this is a Advantages */}
                <h1 className="title-section text-center">Many Benefit You Get</h1>                                
                <div className="row mg-benefit">
                        <div className="col-sm-12 col-md-6">
                            <img className="w-100 text-center"src={benefit} alt="benefit.png"/>
                        </div>
                    
                        <div className="col-sm-12 col-md-6">
                                <ol className="list-benefit">
                                    <li>Available many recipes with much topic</li>
                                    <li>There is contain nutrition in every recipes</li>
                                    <li>Written by best Chef who works in best restaurant</li>
                                    <li>Housewife can learn cooking like Chef</li>
                                    <li>Free Recipes</li>
                                </ol>
                        </div>
                </div>
              </div>
                
            </section>

            <section id="example-recipe">
               <div className="example-section ">
                   <h1 className="title-section text-center">Some Example of the Recipe</h1>

                        <div id="carouselExampleIndicators" className="carousel slide mg-carousel" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={pancakes} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={salad} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                    <img src={meat} className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </button>
                        </div>
               </div>
                
            </section>

            <section id="lets-cook">
                <div className="lets-cook-section" >
                    <h1 className="title-section text-center">Let's Cooking</h1>
        
                    <div className="row my-5">
                    
                        <div className="col-sm-12 col-md-6"> 
                            <p className="text-lets-cook">Don't overthinking, let's find a best recipes you want!</p>
                            <button className="btn orange-color"type="submit">Let's Find It!</button>
                        </div>

                        <div className="col-sm-12 col-md-6">
                            <img className="w-100"src={letcook} alt="home-mealcook.png"/>
                        </div>

                    </div>
        
                </div>
                    
                
                </section>
        </div>
    )
}