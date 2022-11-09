import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Footer() {
    return (
        <div>
          <footer>
               <div className="row mx-3 my-2">
                  <div className="col-4 p-1">
                      <p className="text-justify">mealcook is a website which available some recipes of cookie from famous chefs work in best restaurant's in the world. In here, you can cook like restauran menu 5 start and free realtime online</p>
                  </div>

                  <div className="col-4">
                      <ul className="text-center mx-5">
                         <li><a href="/">Home</a></li>
                         <li><a href="/">About</a></li>
                         <li><a href="/">Terms</a></li>
                         <li><a href="/">Privacy Policy</a></li>
                      </ul>
                  </div>   

                  <div className="col-4">
                       <ul className="">
                          <a className="icon-media" href=""><FontAwesomeIcon icon="fa-brands fa-facebook" size="2x"/></a>
                          <a className="icon-media" href=""><FontAwesomeIcon icon="fa-brands fa-instagram" size="2x"/></a>
                          <a className="icon-media" href=""><FontAwesomeIcon icon="fa-brands fa-twitter" size="2x"/></a>
                          <a className="icon-media" href=""><FontAwesomeIcon icon="fa-brands fa-tiktok" size="2x"/></a>
                      </ul>
                  </div>               
                  
                </div>      
              <p>@copyright-2022 powered by hackntra technologies Ltd</p>
          </footer>
        </div>
    )
}