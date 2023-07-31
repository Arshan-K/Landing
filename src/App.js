import React from "react";
import './App.css';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';




function App(){
  return (<>
  <div className="top">
  <h1>GYMGO</h1>
<nav>
  <ul>
    <li><a href="/Home">Home</a></li>
    <li><a href="/Trainers">Trainers</a></li>
    <li><a href="/Programs">Programs</a></li>
    <li><a href="/Experience">Experience</a></li>
    <li><a href="Pricing">Pricing</a></li>
    <li><a href="/Enter" style={{backgroundColor:'black', color:'white', borderRadius:'40%', padding:'20px'}}>Enter</a></li>
</ul>
</nav>
  </div>

<h1 id="uni">SPORTS <br/> COMPLEX   </h1>
<img src={process.env.PUBLIC_URL + '/field.png'} style={{float:'right', height:'450px', width:'450px', marginRight:'150px', marginTop:'200px', border:'solid white'}} alt="field" />
<div >
<img src={process.env.PUBLIC_URL + '/tennis.png'} alt="tennis" style={{border:'solid white', borderRadius:'5%'}}/>
<p className="first">There are different Sports in this series and you have to work ard to enjoy them. We work here with good coaches to prepare the best for you.
  We are waiting for you in this beautiful Sports complex.We have soecial discounts until the end of this month. 
</p>
</div>

<h1 style={{fontSize:'100px'}}> OUR CLASSES </h1>
<p style={{marginRight:'50px', float:'left', fontSize:'50px', display:'inline-block', textAlign:'left'}}> Our classes are for both ages. You can bring Yourself and <br/>child.Our classes are for both ages. You can bring <br/>Yourself and child.</p>

<ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginRight: '200px', position:'absolute', bottom:'-1100px', right:'500px' }}>
  <li><a  className="Sup" href="/Men" style={{float:'right', fontSize:'50px', color:'black', marginRight:'700px', textDecoration:'none'}}>Men <span style={{marginLeft:'400px'}}><ArrowOutwardIcon sx={{ fontSize: 80 }} /></span> </a></li>
  <li><a  className="Sup" href="/Women" style={{float:'right', fontSize:'50px', color:'black', marginRight:'650px', textDecoration:'none'}}>Women <span style={{marginLeft:'400px'}}><ArrowOutwardIcon  sx={{ fontSize: 80 }}/></span> </a></li>
  <li><a  className="Sup" href="/Child" style={{float:'right', fontSize:'50px', color:'black', marginRight:'700px', textDecoration:'none'}}>Kids <span style={{marginLeft:'400px'}}><ArrowOutwardIcon  sx={{ fontSize: 80 }}/></span> </a></li>
</ul>

<div className="mid">
  
      <img src={process.env.PUBLIC_URL + '/Body.png'} alt="Body" style={{position:'absolute', height:'700px', width:'800px', objectFit:'fill', border:'solid white', borderRadius:'5%', left:'-100px', bottom:'-2000px' }}/>
      <a href="/link">
        <img src={process.env.PUBLIC_URL + '/link.png'} alt="link" style={{position:'absolute',right:'-100px', bottom:'-300px' , height:'700px', width:'1800px', objectFit:'fill', border:'solid black', borderRadius:'5%' }}/>
      </a>
    
    
    <div style={{position:'absolute', height: '700px', width: '800px',borderWidth:'0px' , border: 'solid black', borderRadius: '5%', backgroundColor: 'lightslategrey', fontSize: '100px', textAlign: 'center', bottom:'-2800px', left:'200px' }}>
      Create and Personalize Your <span style={{ color: 'yellow' }}>Workout</span> routine.
    </div>
  
    <img src={process.env.PUBLIC_URL + '/ok.png'} alt="ok" style={{ position:'absolute', bottom:'-2800px', left:'850px' , height:'700px', width:'800px',borderWidth:'0px' , border:'solid black', borderRadius:'5%' }}/>
    <img src={process.env.PUBLIC_URL + '/Done.png'} alt="Done" style={{ position:'absolute', bottom:'-2800px',left:'1800px', height:'700px', width:'800px',borderWidth:'0px' ,border:'solid black', borderRadius:'5%' }}/>
  
</div>


<div style={{ display:'inline-block' , alignItems:'center', marginTop:'150px'}}>
  <h1 style={{ fontSize: '100px', marginLeft:'100px' }}>WORKOUT TRAINERS</h1>

  <a href="/show" style={{padding:'25px', backgroundColor: 'orangered', borderRadius: '15%', color: 'black', fontSize: '50px', marginLeft: '190vh', textAlign:'center', marginTop:'-100px' }}>Show All</a>

  <p style={{fontSize:'50px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Atsit turpis odio omare tellus. At sit dictum tristique eget tortur nulla. Quis nisl marbi sit mouris at fermentum gravida viverra consecteur.
    Egestos volupot nibh ultricies odio ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit turois odio omare tellus.  </p>

  

    

    <a href="/work"><img src={process.env.PUBLIC_URL + '/work.png'} alt="Done" style={{alignItems:'center', objectFit:'fill', border:'solid white', borderRadius:'5%', height:'1200px'}}/></a>

    
</div>


<div class="blog-container">
  <h1 class="blog-title">BLOG</h1>


  <div class="blog-content">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At sit turpis odio tellus. At sit dictum tristique eget tortor nulla.
    Quis nisl morbi sit mourbi at fermentum gravida viverra consectetur. Egestos volupat nibh ultricies odio ipsum.</p>
  </div>

  <div>
    <img className="image1" src={process.env.PUBLIC_URL + '/Bench.png'} alt="Bench" />
    <h3 className="head1" >IS HEAVY EXERCISE HARMFUL FOR WOMEN? WHAT SPORTS ARE BETTER?</h3>
    <a className="link1" href="/Read">Read More</a>
  </div>

  <div >
    <img className="image2" src={process.env.PUBLIC_URL + '/Pack.png'} alt="Pack" />
    <h3 className="head2" >HOW TO CREATE SIXPACK? ASK OUR EXPERIENCED COACHES AND THEY WILL RESPOND.</h3>
    <a className="link2" href="/Read">Read More</a>
  </div>

  <a className="low" href="/More">Discover More <ArrowOutwardIcon  sx={{ fontSize: 80 }}/> </a>
</div>


<div className="price">
  <div className="price-content">
<h1>PRICING PLANS</h1>
<p>These are prices of the courses. See and choose safely, we have more discounts from the <br/>coming months. </p>
</div>
<img className="run" src={process.env.PUBLIC_URL + '/Run.png'} alt="Run"/>
<a href='/Rate'><img className="Rate" src={process.env.PUBLIC_URL + '/Rate.png'} alt="Rate"/> </a>

<div className="get" >
      $150 <br/> Monthly
    </div>
    <div className="week" >
      $50 <br/> weekly
    </div>
    <div className="year" >
      $500 <br/> Yearly
    </div>


</div>



<a href="/link" style={{border:'solid black', borderRadius:'50px 50px 50px 50px', borderWidth:'5px' , color:'black', backgroundColor:'orangered', fontSize:'30px', textAlign:'center', width:'500px', position:'absolute', right:'1700px', padding:'25px', textDecoration:'none', marginTop:'200px'}}>
  INSTAGRAM FEED</a>

  <h1 style={{fontFamily:'Arial',marginTop:'400px',marginLeft:'1500px', fontSize:'100px', fontWeight:'550' }}> COME WITH US </h1>

<div className="pose">
<img className="poseM" src={process.env.PUBLIC_URL + '/PoseMain.png'} alt="Runpose"/>
<img className="pose1" src={process.env.PUBLIC_URL + '/pose1.png'} alt="Runpose"/>
<img className="pose2" src={process.env.PUBLIC_URL + '/pose2.png'} alt="Runpose"/>
<img className="pose3" src={process.env.PUBLIC_URL + '/pose3.png'} alt="Runpose"/>
<img className="pose4" src={process.env.PUBLIC_URL + '/pose4.png'} alt="Runpose"/>

</div>


<div>


<h1 style={{position:'absolute' ,width:'500px', left:'400px', fontSize:'50px', marginTop:'1200px' }}>
  FOLLOW US ON <span style={{fontSize:'80px'}}>SOCIAL MEDIA</span> </h1>


  <img className="style" src={process.env.PUBLIC_URL + '/style.png'} alt="style"/>

  <div >

  <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
  <li><a   href="/Instagram" style={{float:'right', fontSize:'50px', color:'black', marginRight:'2000px', marginTop:'1450px', borderBottom:'solid gray', textDecoration:'none' ,padding:'50px' }}>Instagram <span style={{marginLeft:'400px'}}><ArrowOutwardIcon sx={{position:'absolute', right:'-900px', borderBottom:'solid gray' ,fontSize: 80 }} /></span> </a></li>
  <li><a   href="/twitter" style={{float:'right', fontSize:'50px', color:'black', marginRight:'2050px', marginTop:'70px', borderBottom:'solid gray', textDecoration:'none' ,padding:'50px'  }}> Twitter <span style={{marginLeft:'400px'}}><ArrowOutwardIcon sx={{position:'absolute', right:'-950px', fontSize: 80 }} /></span> </a></li>
  <li><a   href="/facebook" style={{float:'right', fontSize:'50px', color:'black', marginRight:'2000px', marginTop:'90px', borderBottom:'solid gray', textDecoration:'none' ,padding:'50px' }}>Facebook <span style={{marginLeft:'400px'}}><ArrowOutwardIcon sx={{ position:'absolute', right:'-900px' ,fontSize: 80 }} /></span> </a></li>
  <li><a   href="/linkedin" style={{float:'right', fontSize:'50px', color:'black', marginRight:'2000px', marginTop:'90px', borderBottom:'solid gray', textDecoration:'none' ,padding:'50px ' }}> Linkedin <span style={{marginLeft:'400px'}}><ArrowOutwardIcon sx={{position:'absolute', right:'-900px' ,fontSize: 80 }} /></span> </a></li>

    </ul>


  </div>
</div>


<div >
<img src={process.env.PUBLIC_URL + '/table.png'} alt="table" style={{height:'1200px', width:'2400px', marginTop:'100px', marginLeft:'450px', border:'solid black', borderRadius:'5%', borderWidth:'5px', objectFit:'fill'}}/>

{/* <div className='table-container' >

<h1 style={{position:'absolute', top:'100px', left:'100px', fontSize:'80px', color:'white'}}>GYMGO</h1>
<table>
<tc>
  <td style={{color:'yellow'}}>MAKE YOUR BODY STRONGER THEN YESTERDAY</td>
</tc>
</table> */}

</div>


  </>)
}
export default App;