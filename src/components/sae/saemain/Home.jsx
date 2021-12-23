import React from 'react'
import { Carousel } from 'react-carousel-minimal';




const Home = () => {
    const data = [
        {

          image:"https://images.pexels.com/photos/10626851/pexels-photo-10626851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
         
          caption: 
          `<div>
          SAE
                  <br/>
                  Society of Automotive Engineers
                </div>`

        },
        {
          image: "https://images.pexels.com/photos/10626850/pexels-photo-10626850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          caption: `<div>
          SAE
                  <br/>
                  Society of Automotive Engineers
                </div>`
        },
      
          {   image: "https://images.pexels.com/photos/10626852/pexels-photo-10626852.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
          caption: `<div>
          SAE
                  <br/>
                  Society of Automotive Engineers
                </div>`
        },
        {
          image: "https://images.pexels.com/photos/10626849/pexels-photo-10626849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          caption:  `<div>
          SAE
                  <br/>
                  Society of Automotive Engineers
                </div>`
        },
        // {
        //   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
        //   // caption: "San Francisco"
        // },
        // {
        //   image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
        //   // caption: "Scotland"
        // },
        // {
        //   image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
        //   // caption: "Darjeeling"
        // },
        // {
        //   image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
        //   // caption: "San Francisco"
        // },
        // {
        //   image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
        //   // caption: "Scotland"
        // },
        // {
        //   image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
        //   // caption: "Darjeeling"
        // }
      ];
    
      const captionStyle = {
        fontSize: '3em',
        fontWeight: 'bold',
        color:"wheat",
        
           
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
  
    return (
   
        <div className="App">
        <div className='text-center'>
         
          <div style={{
            padding: "0 0px",
           
          }}>
            <Carousel
              data={data}

              time={20000}

              width="1920px"
              height="800px"
              captionStyle={captionStyle}
              radius="5px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="center"
              automatic={true}
              
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="lightgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "1920px",
                maxHeight: "850px",
                marginTop: "2px",
              }}
            />
          </div>
        </div>
      </div>
    )
}



export default Home
