const Settings = () => {
    return (
        <div>
       
         <form className="form border shadow-lg bg-black my-5">
        <p  style={{color:"#570ef6"}} className="title">Make manager</p>
        <p className="message"> Make make manager. </p>
            <div className="flex">
            <label>
                <input required placeholder="" type="text" className="input"/>
                <span>Firstname</span>
            </label>
        </div>  
                
        <label>
            <input required placeholder="" type="email" className="input"/>
            <span>Email</span>
        </label> 
        <center>
          <button className="spacial text-gray-900 relative hover:text-[#fdfbfbd7] py-2 px-6 after:absolute after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#570ef6] after:rounded-t-full after:w-full after:bottom-1 after:left-0" type="submit">
           Make manager
            <span></span>
          </button>
        </center>
    </form>
        </div>
    );
};

export default Settings;