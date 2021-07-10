import React,{useState} from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Activityreport({userid}) {
  const { addToast } = useToasts();
  const [category, setCategory] = useState("");
  const [desc , setDesc]= useState("");
  const [time , setTime] = useState("");
  const [date , setDate] = useState("");
  const [url , setUrl] = useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async(e) => {

    e.preventDefault();
    
    const postReport = {
      volunter_id: userid,
      description: desc,
      program_name: category,
      working_hours: time,
      participation_date: date,
      url: url,
    };
    console.log(postReport);
    try {
      const resp = await axios.post(
        "/report",
        postReport
      );
      if (resp.data.success === true) {
        
        addToast("Saved Successfully", { appearance: "success", autoDismiss: true });
        setTimeout(()=> {
          window.location.reload();
        },1500)
      }
    } catch (error) {
      //setLoading(false);
      console.log(error.response.data);
      addToast("Could Not Submit", {
        appearance: "error",
        autoDismiss: true,
      });
      console.log(error.message);
    }
  }
  const classes = useStyles();

  return (
    <div>
      <title>Acitivity Form</title>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous" />
      <style dangerouslySetInnerHTML={{ __html: "\n        html,\n        body {\n            min-height: 100%;\n        }\n\n        body,\n        div,\n        form,\n        input,\n        select,\n        textarea,\n        label {\n            padding: 0;\n            margin: 0;\n            outline: none;\n            font-family: Roboto, Arial, sans-serif;\n            font-size: 14px;\n            color: rgb(0, 0, 0);\n            line-height: 22px;\n        }\n\n        h1 {\n            position: absolute;\n            margin: 0;\n            font-size: 50px;\n            color: #fff;\n            z-index: 2;\n            line-height: 83px;\n        }\n\n        legend {\n            padding: 10px;\n            font-family: Roboto, Arial, sans-serif;\n            font-size: 18px;\n            color: #fff;\n            background-color: #761e1a;\n        }\n\n        textarea {\n            width: calc(100% - 12px);\n            padding: 5px;\n        }\n\n        .testbox {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: inherit;\n            padding: 20px;\n        }\n\n        form {\n            width: 100%;\n            padding: 20px;\n            border-radius: 6px;\n            background: #fff;\n            box-shadow: 0 0 8px #761e1a;\n        }\n\n        .banner {\n            position: relative;\n            height: 250px;\n            background-image: url(\"/https://youngistaanfoundation.org/wp-content/uploads/2021/05/Youngistaan-Foundation-Home.png\");\n            background-size: cover;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            text-align: center;\n        }\n\n        .banner::after {\n            content: \"\";\n            background-color: rgba(0, 0, 0, 0.4);\n            position: absolute;\n            width: 100%;\n            height: 100%;\n        }\n\n        input,\n        select,\n        textarea {\n            margin-bottom: 10px;\n            border: 1px solid #ccc;\n            border-radius: 3px;\n        }\n\n        input {\n            width: calc(100% - 10px);\n            padding: 5px;\n        }\n\n        input[type=\"date\"] {\n            padding: 4px 5px;\n        }\n\n        textarea {\n            width: calc(100% - 12px);\n            padding: 5px;\n        }\n\n        .item:hover p,\n        .item:hover i,\n        .question:hover p,\n        .question label:hover,\n        input:hover::placeholder {\n            color: #006622;\n        }\n\n        .item input:hover,\n        .item select:hover,\n        .item textarea:hover {\n            border: 1px solid transparent;\n            box-shadow: 0 0 3px 0 #006622;\n            color: #006622;\n        }\n\n        .item {\n            position: relative;\n            margin: 10px 0;\n        }\n\n        .item span {\n            color: red;\n        }\n\n        input[type=\"date\"]::-webkit-inner-spin-button {\n            display: none;\n        }\n\n        .item i,\n        input[type=\"date\"]::-webkit-calendar-picker-indicator {\n            position: absolute;\n            font-size: 20px;\n            color: #00b33c;\n        }\n\n        .item i {\n            right: 1%;\n            top: 30px;\n            z-index: 1;\n        }\n\n        .week {\n            display: flex;\n            justify-content: space-between;\n        }\n\n        .columns {\n            display: flex;\n            justify-content: space-between;\n            flex-direction: row;\n            flex-wrap: wrap;\n        }\n\n        .columns div {\n            width: 48%;\n        }\n\n        [type=\"date\"]::-webkit-calendar-picker-indicator {\n            right: 1%;\n            z-index: 2;\n            opacity: 0;\n            cursor: pointer;\n        }\n\n        input[type=radio],\n        input[type=checkbox] {\n            display: none;\n        }\n\n        label.radio {\n            position: relative;\n            display: inline-block;\n            margin: 5px 20px 15px 0;\n            cursor: pointer;\n        }\n\n        .question span {\n            margin-left: 30px;\n        }\n\n        .question-answer label {\n            display: block;\n        }\n\n        label.radio:before {\n            content: \"\";\n            position: absolute;\n            left: 0;\n            width: 17px;\n            height: 17px;\n            border-radius: 50%;\n            border: 2px solid #ccc;\n        }\n\n        input[type=radio]:checked+label:before,\n        label.radio:hover:before {\n            border: 2px solid #006622;\n        }\n\n        label.radio:after {\n            content: \"\";\n            position: absolute;\n            top: 6px;\n            left: 5px;\n            width: 8px;\n            height: 4px;\n            border: 3px solid #006622;\n            border-top: none;\n            border-right: none;\n            transform: rotate(-45deg);\n            opacity: 0;\n        }\n\n        input[type=radio]:checked+label:after {\n            opacity: 1;\n        }\n\n        .flax {\n            display: flex;\n            justify-content: space-around;\n        }\n\n        .btn-block {\n            margin-top: 10px;\n            text-align: center;\n        }\n\n    \n\n        @media (min-width: 568px) {\n\n            .name-item,\n            .city-item {\n                display: flex;\n                flex-wrap: wrap;\n                justify-content: space-between;\n            }\n\n            .name-item input,\n            .name-item div {\n                width: calc(50% - 20px);\n            }\n\n            .name-item div input {\n                width: 97%;\n            }\n\n            .name-item div label {\n                display: block;\n                padding-bottom: 5px;\n            }\n        }\n    " }} />
      <div className="testbox">
        <form>
          <div className="banner">
            <h1>Activity Report</h1>
          </div>
          <br />
          <fieldset>
            <legend> Activity Update</legend>
            <div className="item">
              <div className="item">
                <p>Volunteered Program</p>
                <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  onChange={handleChange}
                >
                  <MenuItem value={"Bright Spark Education Program"}>Bright Spark Education Program</MenuItem>
                  <MenuItem value={"Transformers (Livelihood)"}>Transformers (Livelihood)</MenuItem>
                  <MenuItem value={"Food and Nutrition Program"}>Food and Nutrition Program</MenuItem>
                  <MenuItem value={"Gender Program"}>Gender Program</MenuItem>
                  <MenuItem value={"Youngistaan Animal Heroes"}>Youngistaan Animal Heroes</MenuItem>
                  <MenuItem value={"Blood Donor"}>Blood Donor</MenuItem>
                </Select>
              </FormControl>
                <span>*</span>
              </div>
              <div className="columns">
                <label htmlFor="ParicipatedDate">Participated Date<span>*</span></label>
                <input id="ParicipatedDate" type="date" name="ParicipatedDate" onChange={(e) => setDate(e.target.value)}/>
                <i className="fas fa-calendar-alt" />
              </div>
              <div className="item" style={{ width: '100%' }}>
                <label htmlFor="time">Amount of time spent</label>
                <input id="time" type="number" name="time" value={time} onChange={(e) => setTime(e.target.value)}/>
              </div>
            </div>
            <div className="item">
              <label htmlFor="instruction">Description of Your Valuable time spent</label><span>*</span>
              <textarea id="instruction" rows={5} defaultValue={""} value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>
            <div className="item">
              <p>Submit your work URL or attach file:</p>
              <input type="text" name="providing" value={url} onChange={(e) => setUrl(e.target.value)}/>
              <input type="file" name="file" accept="file/*" />
            </div>

          </fieldset>
          <div className="btn-block">
          <a class="btn btn-info " onClick={handleSubmit}>Submit</a>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Activityreport