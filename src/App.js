import React, { useState } from "react";
//import Header from "./component/Header";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import Card from "./component/Card";




function App() {
  let [count,setCount]=useState(0);
 

  let prod_dtls=[
      {
          prod_name:"Soap",
          prod_price:"$40.00-$50.00"
      },
      {
          prod_name:"Shampoo",
          prod_price:"$60.00-$70.00"
      },
      {
          prod_name:"Fase Wash",
          prod_price:"$30.00-$50.00"
      },
      {
          prod_name:"Face Mask",
          prod_price:"$60.00-$80.00"
      },

  ];
  return (
    <>
     <Navigation  count={count}/>
   {/*  <Header/>*/}
   <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                   {
                        prod_dtls.map((e,i)=>{
                        return <Card key={i} prod_dtls={e}  setCount={setCount}/>  
                        
                    })
                   }
                   
                </div>
            </div>
           
        </section>
    <Footer/>
    </>
  );
}

export default App;
