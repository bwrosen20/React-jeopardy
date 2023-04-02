import React,{useState} from "react"

function NewQuestionForm(){

  const [submitted,setSubmitted]=useState(false)
  let [formData,setFormData]=useState({
    prompt:"",
    correctAnswers:[],
    className:"",
    value:0
  })

  function handleChange(event){
   
    setFormData({
      ...formData,
      [event.target.name]:event.target.value,
      ["value"]:((event.target.value).includes("200"))?200:
      ((event.target.value).includes("400"))?400:
      ((event.target.value).includes("600"))?600:
      ((event.target.value).includes("800"))?800:1000
    })
  }


  function handleSubmit(){
    setSubmitted(true)
    fetch("http://localhost:3001/questions",{
      method:"POST",
      headers:{
        "Content-type": "application/json",
      },
      body:JSON.stringify(formData)
    })
    .then((r)=>r.json())
    .then((data)=>console.log(data))
  }

    return <div>
        <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            placeholder="Please input question"
            className="forminput"
            type="text"
            name="prompt"
            value={formData.prompt}
            onChange={handleChange}
          />
        </label>
        <label>
          Correct answer:
          <input
            placeholder="Please input answer"
            type="text"
            name="correctAnswers"
            value={formData.correctAnswers}
            onChange={handleChange}
          />
        </label>
        <label>
          Category/value:
          <select
            placeholder="Select category/value"
            name="className"
            value={formData.className}
            onChange={handleChange}
          >
            <option value="none">Select category/value</option>
            <option value="movies200">movies200</option>
            <option value="movies400">movies400</option>
            <option value="movies600">movies600</option>
            <option value="movies800">movies800</option>
            <option value="movies1000">movies1000</option>
            <option value="tv200">tv200</option>
            <option value="tv400">tv400</option>
            <option value="tv600">tv600</option>
            <option value="tv800">tv800</option>
            <option value="tv1000">tv1000</option>
            <option value="geography200">misc200</option>
            <option value="geography400">misc400</option>
            <option value="geography600">misc600</option>
            <option value="geography800">misc800</option>
            <option value="geography1000">misc1000</option>
            <option value="sports200">sports200</option>
            <option value="sports400">sports400</option>
            <option value="sports600">sports600</option>
            <option value="sports800">sports800</option>
            <option value="sports1000">sports1000</option>
            <option value="books200">books200</option>
            <option value="books400">books400</option>
            <option value="books600">books600</option>
            <option value="books800">books800</option>
            <option value="books1000">books1000</option>
          </select>
        </label>
        
        <button type="submit">Add Question</button>
      </form>
    </section>

    <div>{submitted?<h3>Submitted</h3>:null}</div>
    </div> 


}

export default NewQuestionForm