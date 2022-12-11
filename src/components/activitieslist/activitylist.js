import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TextField from "@mui/material/TextField";
import './ActivityListStyles.css'
// import InfoCard from '../infoCard/infocard'
import ActivityCard from '../activityCard/activityCard';
import Pagination from '../pagination/pagination';



const ActivityList = () => {

    const [activities, setActivities] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    useEffect(() => {

        axios.get('http://localhost:5067/api/activities')
            .then(res => {
                console.log(res)
                setActivities(res.data)

            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };

    const filteredData = activities.filter((el) => {
        if (inputText === '') {
            return el;
        } else {
            return el.name.toLowerCase().includes(inputText)
        }
    })

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);

      // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='activityList'>
        <div className='container'>
            <div className='content'>
            
                <div className="search">
                    <h2>Užsiėmimų paieška</h2>
                    <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    fullWidth
                    label="Paieška"
                    />
                </div>

                <div className='wrapper'>
                    {currentPosts.map((item) => (

                        <ActivityCard  
                        img = "https://media.istockphoto.com/id/1296601764/photo/slave-hands-broken-chains-with-bird-flying.jpg?b=1&s=170667a&w=0&k=20&c=ksZ6aHBwS6ASuDKHxKgNm0AyGJFotPDo1rvhGT4ZxbQ="
                        title = {item.name}
                        desc = {item.description}
                        /> 

                    ))}
                 </div>

                <div className='pages'>
                    <Pagination 
                        postsPerPage={postsPerPage}
                        totalPosts={filteredData.length}
                        paginate={paginate}
                    />
                 </div>

            </div>
        </div>
    </div>
  )
}

export default ActivityList