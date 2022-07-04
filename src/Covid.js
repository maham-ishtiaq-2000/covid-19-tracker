import React,{useState,useEffect} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
import axios from 'axios';
import './Covid.css';
import InfoBox from './InfoBox';
import LineGraph from './LineGraph';

ChartJS.register(ArcElement, Tooltip, Legend);

const Covid = () => {
   
    let [countries,setCountries] = useState(["USA","Japan"])
    let [countriesData , setCountriesData] = useState([]);
    let [name,setName] = useState("")

    let obj = {
        array: []
    };
    for (var l=0;l<100;l++){
        obj.array[l] = l+1;
    }
    console.log("obj: ", obj);
    let optionItems = countries.map((item) =>
        <option key={item}>{item}</option>
    );
    useEffect(() => {
        getCovidData()
    },[])
    const getCovidData = () =>{
        let coloursData = []
        let countries = []
        let countriesName = []
        axios.get("https://disease.sh/v3/covid-19/countries")
        .then((response) => {
            for(let i = 0 ; i < 230 ; i++){
                
                countries = countries.concat(response.data[i])
                countriesName = countriesName.concat(response.data[i].country)
            }
        
            setCountries(countriesName)
            setCountriesData(response.data)
        })

        .catch(function (error) {

        });
        
        
       
        
    }
    console.log(countriesData[0])
    const selectName = (e) =>{
        console.log(e.target.value)
        console.log("ALHAMDULILLAH CALLED")
        let index = countries.indexOf(e.target.value)
        
        setName(countriesData[index])
    }
  console.log(name)
  return (
    <>
    <div className='container-fluid mainDiv'>
        <div className='leftDiv'>
            <div className='leftDivs'>
                 <div className='heading'><p class="h2">COVID-19 TRACKER</p></div>
                <div className='searchBar'>
                <form action="/action_page.php">
                    
                    <select  onChange={selectName}>
                       <option disabled default>Select Country</option>
                        {countries.map((item) => {
                            return(
                                <option value={item}>{item}</option>
                            )
                        })}
                    </select>
                    <br></br>
                    </form>
                </div>
            </div>
            <div className='infoBox'>
                <InfoBox class="singleDiv" type="Cases" name={name}/>
                <InfoBox class="singleDiv" type="Recovered" name={name}/>
                <InfoBox class="singleDiv" type="Death" name={name}/>
            </div>
            <p className='status'>Status of Countries where covid was at peak (2019-2022)</p>
            <div className='lineGraph'>
              
                <LineGraph />
            </div>
           
        </div>
        <div className='rightDiv'>
                <div className='cases'>
                    <h4 style={{"color" : "grey" , "marginLeft" : "5%" , "marginTop" : "5%" , "marginBottom" : "5%"}}>Live Cases By Country</h4>
                    <table>
                           {countriesData.map((item) => {
                            return(
                                <tr>
                                    <td>{item.country}</td>
                                    <td>{item.cases}</td>
                                </tr>
                            )
                           })}
                            
                           
                            </table>
                           
                          

            
                </div>
        </div>
    </div>


    </>
  )
}

export default Covid