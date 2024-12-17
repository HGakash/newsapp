import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [
    {
      "status": "ok",
      "totalResults": 64,
      "articles": [
        {
          "source": {
            "id": null,
            "name": "Livemint"
          },
          "author": "Livemint",
          "title": "Long Covid More Severe In Women Than Men",
          "description": "The study found that 91% of patients, who were followed up for five months on average, continued to experience Covid-19 symptoms. Breathlessness was the most common symptom of long Covid-19, followed by fatigue",
          "url": "https://www.livemint.com/news/india/long-covid-more-severe-in-women-than-men-suggests-study-11650538683775.html",
          "urlToImage": "https://images.livemint.com/img/2022/04/21/600x338/long_covid_symptoms_1650540839356_1650540839488.jpg",
          "publishedAt": "2022-04-21T11:37:19Z",
          "content": "Post-coronavirus complications, also called long Covid syndrome, induce more symptoms in women than men, a new study has found. The new research, published in the Journal of Women's Health, reveale… [+2402 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The European Scientist"
          },
          "author": "Alex Reis",
          "title": "Air pollution increases risk of getting COVID-19 in young adults - The European Scientist",
          "description": "Exposure to air pollutants increases the risk of a COVID infection in young adults, according to a study published in the scientific journal JAMA Network Open.",
          "url": "https://www.europeanscientist.com/en/environment/air-pollution-increases-risk-of-getting-covid-19-in-young-adults/",
          "urlToImage": "https://www.europeanscientist.com/wp-content/uploads/2022/04/46385A43-4ABE-46E7-8556-37B944126F7F.jpeg",
          "publishedAt": "2022-04-21T11:22:43Z",
          "content": "Exposure to air pollutants increases the risk of a COVID infection in young adults, according to a study published in the scientific journal JAMA Network Open. As pollutants can increase the risk of… [+2206 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Thewire.in"
          },
          "author": "Prakash Nagarkatti and Mitzi Nagarkatti",
          "title": "Why We Can't 'Boost' Our Way Out of the COVID-19 Pandemic in the Long Term – The Wire Science - The Wire Science",
          "description": "While current vaccines are effective at preventing severe disease, the next phase of vaccine development will need to focus on triggering long-lived antibody response.",
          "url": "https://science.thewire.in/health/we-cannot-boost-our-way-out-of-covid-19-pandemic-in-long-term/",
          "urlToImage": "https://cdn.thewire.in/wp-content/uploads/2022/04/21164421/2022-04-13T080134Z_1_LYNXNPEI3C09C_RTROPTP_4_HEALTH-CORONAVIRUS-TAIWAN-scaled.jpg",
          "publishedAt": "2022-04-21T11:20:35Z",
          "content": "A woman receives a booster shot of a COVID-19 vaccine at Taipei main station, Taiwan, January 24, 2022. Photo: Reuters/Ann Wang/File Photo mRNA vaccines have failed to provide long-term prot… [+7979 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Keralakaumudi.com"
          },
          "author": "Kerala Kaumudi",
          "title": "Let's manage pain, learn about 'Pain Medicine' - LIFESTYLE - GENERAL - Kerala Kaumudi ",
          "description": "Pain Medicine is a relatively new medical specialty that deals with the comprehensive management of chronic pain. Chronic pain refers to any pain condition that lasts more than 3 months.",
          "url": "https://keralakaumudi.com/en/news/news.php?id=797844&u",
          "urlToImage": "https://keralakaumudi.com/web-news/en/2022/04/NMAN0327506/image/pain.1650539584.jpg",
          "publishedAt": "2022-04-21T11:14:14Z",
          "content": "What is Pain Medicine? Pain Medicine is a relatively new medical specialty that deals with the comprehensive management of chronic pain. Chronic pain refers to any pain condition that lasts more tha… [+6986 chars]"
        },
        {
          "source": {
            "id": "usa-today",
            "name": "USA Today"
          },
          "author": "Dr. Michael Daignault, USA TODAY",
          "title": "We've long been told salt is bad for you. Is it really? - USA TODAY",
          "description": "We've long debated how bad salt really is in our diet. Table salt, however, is not actually the problem. Sodium and processed foods are the danger.",
          "url": "https://www.usatoday.com/story/life/health-wellness/2022/04/21/salt-sodium-how-much-too-much-your-food/7383952001/",
          "urlToImage": "https://www.gannett-cdn.com/-mm-/27594c94e294278da7a9705c8a139c700fad0370/c=0-188-1998-1312/local/-/media/2021/07/27/USATODAY/usatsports/french-fries-and-salt.jpg?auto=webp&format=pjpg&width=1200",
          "publishedAt": "2022-04-21T11:01:15Z",
          "content": "For years now, we’ve continued to debate whether salt is actually “bad” for our health. And in discussing healthy diet and lifestyle choices with both my ER patients and friends alike, the common thr… [+3565 chars]"
        }
      ]
    }    
  ]
  constructor(){
    super(); //This ensures that the Component's constructor logic is executed before adding any custom behavior in NewsItem.
    console.log("hello iam constructor from news component");
    this.state = {
      articles: this.articles[0].articles,
      loading: false
    }
  }
  render() {
   return(
    <div className='container my-3'>
      <h2>NewsMonkey - Top Headlines</h2>
      <div className='row'>
        {this.state.articles.map((element)=>{
        return ( <div className = 'col-md-4' key={element.url}>
              <NewsItem 
              title={element.title.slice(0,45)} 
              description={element.description.slice(0,88)} 
              imageUrl = {element.urlToImage}
              newsUrl = {element.url}
              lengthTitle = {element.title.length}
              />
            </div>
          );
        })}
      </div>
    </div>
   )
}
}