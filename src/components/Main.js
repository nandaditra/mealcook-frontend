import home from '../img/home-mealcook.png'
import about from '../img/about.png'
import benefit from '../img/benefit.png' 
import pancakes from '../img/pancakes.jpg'
import salad from '../img/salad.jpg'
import meat from '../img/meat.jpg'

export default function Main() {
    return (
        <div className="container">
            <section className="">
                {/* this is a home section */}
                <div className="row mg-home">
                   <div className="col-6 mg-title">
                          <h1 className="text-center home-title">Make Your Cook Like Famous Best Chef</h1>
                   </div>

                    <div className="col-6 mg-title">
                        <img className="w-175 home-logo"src={home} alt="home-mealcook.png"/>
                    </div>
                </div>
            </section>

            <section>
                {/* This is a about section */}
                <div className="row mg-about">
                    <div className="col-12 text-center">
                       <h2 className="title-section">What is mealcook?</h2>
                       <p>mealcook is a website which available some recipes of cookie from famous chefs work in best restaurant's in the world. In here, you can cook like restauran menu 5 start</p>
                    </div>

                    <div className="col-12 text-center">
                        <img src={about} alt="about.png"/>
                    </div>
                </div>
                
            </section>

            <section>
                {/* this is a Advantages */}
                <h4 className="title-section text-center">Many Benefit You Get</h4>                                
                <div className="row">
                        <div className="col-6">
                            <img src={benefit} alt="benefit.png"/>
                        </div>
                    
                        <div className="col-6">
                                <ol>
                                    <li>Available many recipes with much topic</li>
                                    <li>There is contain nutrition in every recipes</li>
                                    <li>Written by best Chef who works in best restaurant</li>
                                    <li>Housewife can learn cooking like Chef</li>
                                    <li>Free Recipes</li>
                                </ol>
                        </div>
                </div>    
                
            </section>

            <section>
                <h4 className="title-section text-center">Some Example of the Recipe</h4>

                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={pancakes} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src={salad} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src={meat} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </button>
                </div>
            </section>

            <section>
                <div>
                       <h4 className="title-section text-center">Let's Cooking</h4>
                       <p>Don't overthinking, let's find a best recipes you want!</p>
                </div>
                
                <div>
                    <img src="" alt="home-mealcook.png"/>
                </div>
            </section>
        </div>
    )
}