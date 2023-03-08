import React, { useState } from 'react';

const AddPortfolioCardform = () => {
    const [portfoliourl, setPortfolurl] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [show, setShow] = useState("");
    const [github, setGithub] = useState("");
  
    // const [portfolioform, setportfolioform] = useState({});

    const inputurl = (e) => {
        setPortfolurl(e.target.value);
    };
    const inputtitle = (e) => {
        setTitle(e.target.value);
    };
    const inputdescription = (e) => {
        setDescription(e.target.value);
    };
  
    const inputshow = (e) => {
        setShow(e.target.value);
    };
    const inputgithub = (e) => {
        setGithub(e.target.value);
    };
   
    // const allinput = () => {
    //     setportfolioform({portfoliourl,title,description,show,github});
    // };
  

  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // allinput();
     
      const url = `http://localhost:5000/portfolio`;
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({portfoliourl,title,description,show,github}),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // setportfolioform({portfoliourl,title,description,show,github});
                // portfolioform(data);
            });



    };
    return (
        <div className="bg-[#0b111e]  w-full h-screen">
        <div className="max-w-[1240px]    text-center mx-auto py-[180px] ">
          <div className="flex justify-center align-middle">
            <form onSubmit={handleSubmit} className="w-9/12 ">
              <input
                onChange={inputurl}
                value={portfoliourl}
                
                className=" p-2 border rounded block w-3/4 mx-auto m-1"
                type="url"
                placeholder="Enter your photo url"
              />

              <input
                onChange={inputtitle}
                value={title}
                
                className=" p-2 border rounded block w-3/4 mx-auto m-1"
                type="text"
                placeholder="Enter your portfolio title"
              />
              
              <input
                onChange={inputdescription}
                value={description}
                
                className=" p-2 border rounded block w-3/4 mx-auto m-1"
                type="text"
                placeholder="Enter your portfolio title"
              />

              <input
                onChange={inputshow}
                value={show}
                className=" p-2 border rounded block w-3/4 mx-auto m-1"
                type="url"
                placeholder="Enter your portfolio live link url"
              />
              <input
                onChange={inputgithub}
                value={github}
                className=" p-2 border rounded block w-3/4 mx-auto m-1"
                type="url"
                placeholder="Enter your github link url"
              />
              <button
                type="submit"
                id="login-btn"
                className="bg-yellow-300 px-4 py-2 rounded mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddPortfolioCardform;