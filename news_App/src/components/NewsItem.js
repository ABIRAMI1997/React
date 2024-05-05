import React, { Component } from "react";

export class NewsItem extends Component {
  articles = [
    {
      status: "ok",
      totalResults: 10,
      articles: [
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "Tens of millions secretly use WhatsApp despite bans",
          description:
            "Will Cathcart reveals how many people are secretly using his app in countries where it is banned.",
          url: "https://www.bbc.co.uk/news/articles/ckke9x0e50xo",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/7f47/live/c7ab93d0-0785-11ef-b9d8-4f52aebe147d.jpg",
          publishedAt: "2024-05-04T08:07:18.6949753Z",
          content:
            '"Tens of millions" of people are using technical workarounds to secretly access WhatsApp in countries where it is banned, the messaging platform\'s boss has said.\r\nYoud be surprised how many people ha… [+681 chars]',
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title:
            "Universities brace for disruption at graduations by Gaza war protesters",
          description:
            "Students on at least one campus are planning Gaza war protests as commencement season begins this weekend.",
          url: "https://www.bbc.co.uk/news/world-us-canada-68954382",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/11F4/production/_133269540_faeaa0f756de644c46cda569f88716a0bb6e7cc00_72_2738_15412738x1541.jpg",
          publishedAt: "2024-05-04T08:07:17.0859998Z",
          content:
            "The next chapter of campus protests may soon begin, with universities across the US preparing for possible disruptions at graduation ceremonies.\r\nFour universities rocked by pro-Palestinian protests … [+3905 chars]",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "Japan calls Biden 'xenophobic' comments 'unfortunate'",
          description:
            'The US President called Japan, China, India and Russia "xenophobic" because they did not welcome immigration.',
          url: "https://www.bbc.co.uk/news/world-us-canada-68955413",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/9B10/production/_133269693_gettyimages-2148345419.jpg",
          publishedAt: "2024-05-04T07:52:17.4446026Z",
          content:
            'The labelling of Japan as "xenophobic" by Joe Biden was "unfortunate" and "not based on an accurate" understanding of the country, Japan\'s US embassy says. \r\nThe US president said during a campaign f… [+2124 chars]',
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "Mexico finds three bodies in search for missing tourists",
          description:
            "Bodies are found in the search for two missing Australian brothers and an American.",
          url: "https://www.bbc.co.uk/news/articles/c4n1243x755o",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/d8e6/live/67107d80-09d6-11ef-bee9-6125e244a4cd.jpg",
          publishedAt: "2024-05-04T07:22:15.4914395Z",
          content:
            "Forensic tests will be conducted by a state laboratory to identify the bodies, the state of Baja California prosecutor's office said. \r\nThe office also noted on Friday that arrest warrants had been o… [+1122 chars]",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "TikTok loves North Korea's latest propaganda bop. Why?",
          description:
            "A song praising Mr Kim has got TikTok hooked - but experts say it could be hiding something more sinister.",
          url: "https://www.bbc.co.uk/news/articles/ckv7yk88q0go",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/16f0/live/9b921d80-0868-11ef-bee9-6125e244a4cd.jpg",
          publishedAt: "2024-05-04T01:07:15.8050338Z",
          content:
            "When North Korean dictator Kim Jong Un released his latest song two weeks ago, surely he couldnt have foreseen it becoming a hit on TikTok.\r\nBut the propaganda tune has gone viral online with Gen Z u… [+1883 chars]",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "Worst-ever interviews: 'They told us to crawl and moo'",
          description:
            "Dozens of jobseekers tell the BBC about their worst-ever interview experiences.",
          url: "https://www.bbc.co.uk/news/articles/c4n1j9lvrdeo",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/b3b4/live/5fe17650-0980-11ef-b9d8-4f52aebe147d.jpg",
          publishedAt: "2024-05-03T23:52:12.6635766Z",
          content:
            "Many people also told the BBC they had been discriminated against during hiring based on their gender.\r\nAccording to data from hiring platform Applied, nearly one in five women have been asked whethe… [+686 chars]",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "Have the wheels come off for Tesla?",
          description:
            "As the electric carmaker sees sales fall and cuts jobs, we take a closer look at its problems.",
          url: "https://www.bbc.co.uk/news/business-68947020",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/12864/production/_133267857_tesla-gettyimages-1494887228.jpg",
          publishedAt: "2024-05-03T22:37:14.7888322Z",
          content:
            "There was a time when it seemed Tesla could do no wrong. \r\nIn little more than a decade, it went from technology upstart to mass-market carmaker, invested billions in its clean energy business, and s… [+6127 chars]",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title:
            "Henry Cuellar: US congressman and wife charged with taking $600,000 in bribes",
          description:
            "It is alleged the couple accepted money from an Azerbaijani government-run oil firm and a Mexican bank.",
          url: "https://www.bbc.co.uk/news/world-us-canada-68940479",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/FD34/production/_125002846_gettyimages-1331494999.jpg",
          publishedAt: "2024-05-03T21:22:13.7107338Z",
          content:
            "US congressman Henry Cuellar and his wife have been charged with accepting around $600,000 (£478,000) in bribes, the justice department says.\r\nIt is alleged the couple corruptly received money from a… [+2482 chars]",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title:
            "Three arrested and charged over Sikh activist's killing in Canada",
          description:
            "Hardeep Singh Nijjar was shot dead last June, sparking a diplomatic row between India and Canada.",
          url: "https://www.bbc.co.uk/news/world-us-canada-67836968",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/2DC7/production/_130391711_hardeepsinghnijjar.jpg",
          publishedAt: "2024-05-03T21:07:15.0649118Z",
          content:
            "Three Indian nationals have been arrested and charged over the killing of a Sikh separatist leader in Canada, which sparked a major diplomatic row between the two countries.\r\nHardeep Singh Nijjar, 45… [+2460 chars]",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: "BBC News",
          title: "Ex-aide gets emotional during Trump hush-money trial",
          description: null,
          url: "https://www.bbc.co.uk/news/world-us-canada-68952409",
          urlToImage: null,
          publishedAt: "2024-05-03T20:37:05.7267016Z",
          content: null,
        },
      ],
    },
  ];

  constructor() {
    super();
    console.log(this.article);
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    let { title, description, imageurl,newsUrl } = this.props;
    return (
      <div>
        <div class="card my-4 mx-4" style={{ width: "18rem" }}>
          <img src={imageurl} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" class="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
