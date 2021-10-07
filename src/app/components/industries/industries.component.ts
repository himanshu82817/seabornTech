import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit {

  constructor() { }

  headings=[
    {heading:"Banking and financial",content:"SEABORN TECHNOLOGIES offer core banking and financial services to help banks and financial institutions better engage with customers and users. We come up with innovative engagement models that enhance customer experiences and at the same time deliver operational efficiency. Our easy-to-use, flexible , customer friendly software encompasses all industry standards and are easily configurable",img:"/assets/images/industries/banking.svg",flipped:true},
    {heading:"Reatail and E-Commerce",content:"Leverage our deep technical expertise to develop digital solutions that are seamless and affordable. We work with all business verticals from the world and deliver web applications, mobile apps and enterprise solutions. Our retail and e-commerce development team help build business solutions according to the client’s need.",img:"/assets/images/industries/ecom.svg",flipped:false},
    {heading:"Travel and Tourism",content:"With our technical knowledge, we create products that facilitate better connected experiences between user and service providers. We specialize in building complex tourism apps that help leading travel brands deliver world-class results",img:"/assets/images/industries/tour.svg",flipped:true},
    {heading:"Education and E-Learning",content:"As an education and e-learning development company ,we offer custom education and eLearning app development solutions to startups , small and medium enterprises. Our tailor-made products improve the way students learn, play and explore",img:"/assets/images/industries/learning.svg",flipped:false},
    {heading:"Healthcare",content:"Using latest technologies like AI, IoT, AR, VR to cater to a broad spectrum of customer needs. Our range of healthcare app development services include fitness monitoring apps, patient care, ERP, CRM, appointment booking, etc.",img:"/assets/images/industries/health.svg",flipped:true},
    {heading:"Logistics and Transportation",content:"We bring great value proposition to your dynamic and ever-changing technology needs in the transportation and logistics industry. our development solutions improve business management, increase workflow and enhance real time communication.",img:"/assets/images/industries/transport.svg",flipped:false},
    {heading:"Media and Entertainment",content:"At Seaborn Technologies ,we offer top- notch software solutions in video streaming ,ERP , CRM, gaming applications and much more. Our experts come up with on demand solutions based on artificial intelligence allowing people to enjoy the best media and entertainment in their location",img:"/assets/images/industries/media.svg",flipped:true},
    {heading:"Automotive",content:"Our automotive software solutions include VPN protection, Business intelligence, CRM and ERP solutions.We design artificial intelligence based apps with interactive UI,analytic tools tailored made for your business.",img:"/assets/images/industries/car.svg",flipped:false}


  

  ]



  bankingCards=[
         {heading:"Digital Wallet",content:"app-a convenient solution for customers to purchase their products online with greater ease, safe money transfer and more"},
         {heading:"AI based apps", content:"assist in business analysis ,ensure workflow, ERP/CRM solutions , money management etc"},
         {heading:"Enterprise finance software",content:"sharpen your competitive edge with the power of banking software solutions by delivering flexibility and convenience of essential banking operations right from mobile devices"},
         {heading:"Payment gateway and POS apps",content:"build software to access payments on any device such as credit/debit ,etc."}

  

  ]

eComCards = [

{heading:"IOT based apps",content:"manage inventories ,get product specifics ,print shipping labels and send notifications to customers"},
{heading:"AR/VR retail apps",content:"build apps that provide quality customer service and enhance their retail shopping experience"},
{heading:"E-Commerce chatbots",content:"chatbots to assist you in business ,understand consumer demands and save time,money and resources"}

]

travelCards=[

{heading:"AI based trip itinerary apps",content:"create personalized itinerary with flight booking confirmation, hotel reservation,ticketing services,etc."},
{heading:"Geo-tracking apps",content:"allows users to pin multiple landmarks like cafes,museums,restaurants,ATMs,etc along with path for future reference."},
{heading:"AR/VR based travel apps",content:"helps travel buffs explore places in advance and choose their ideal destination."},
{heading:"Travel mobility solutions",content:"helping hotels, cafes and restaurants reach out to their potential customers by building softwares with user-friendly interfaces and features."},


]

eduCards=[

{heading:"E-Learning solutions",content:"created for people in education sector with services like payment gateways, CRM, DATA management and much more."},
{heading:"AR/VR services",content:"providing augumented reality models for educational purposes.it visualizes topics and objects from textbooks into 3D interactive models in various subjects like physics ,maths ,anatomy."},
{heading:"Machine learning chatbots",content:"chatbots to keep track of student’s progress and achievements . Help identify mistakes with precision,checking homework ,solve queries ,etc."},
{heading:"On dmand learing apps",content:"create platform for both educators and learners to explore knowledge the new way ensuring better access to study materials with low subscription rates and timely generating progress reports."}
]

healthCards=[
{heading:"IOT based healthcare apps",content:"mobile apps with GUI that helps doctors and patients to measure all health parameters. Leverage our cloud computing service to store their health data and access it anywhere ,anytime."},
{heading:"Online Pharmacy",content:"mobile application designed to allow patients buy medicines online ,schedule appointments and share medical records safely and get assistance in treatment."},
{heading:"AR/VR healthcare apps",content:"using machine learning tools and data visualization to help doctors to diagnose,treat and perform surgeries more accurately."}
  
]

logsticsCards=[

  {heading:"vehicle tracking apps",content:"remote monitoring of vehicles ensuring better digital transactions with better UI/UX applications."},
  {heading:"Chatbots",content:"machine learning and artificial intelligence based software using natural language processing to enable transportation business worldwide."},
  {heading:"AI based apps",content:"app to manage your employee database ,monitor performances , improve system efficiency."},
  {heading:"On-demand apps",content:"TO ensure flow of goods and services, storage of raw materials, work- in process inventory . thus improving warehouse efficiency and productivity."}

]

mediaCards=[

  {heading:"Chatbots",content:"machine learning and artificial intelligence based software using natural language processing to understand business and make smart choices."},
  {heading:"Apps for entertainment",content:"developing smart apps that allows users to access TV all time."},
  {heading:"AR/VR based apps",content:"interactive ticketing experience, movie reservations ,gaming and much more."},
  {heading:"AI based apps",content:"allowing users to find shows ,events near their location, prior planning with low rates, ensuring data safety and full enjoyment."}
]

AutomotiveCards=[

  {heading:"On-demand apps",content:"Building apps with features like GPS and navigation, vehicle maintenance, fuel consumption, mileage logging, simulation, etc."},
  {heading:"Enterprise mobile apps",content:"With real time vehicle monitoring, breakdown prevention , UI/UX interfaces and other advanced vehicle controlling devices"},
  {heading:"Chatbots",content:"Machine learning and artificial intelligence based software using natural language processing to understand business and make smart choices."},
  {heading:"AI based apps",content:"To enhance security using technologies like voice recognition, virtual assistance avoiding clashes and ensuring vehicle safety."}
]

  ngOnInit(): void {
  }

}
