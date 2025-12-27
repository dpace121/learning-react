import Card from './components/Card'

const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
    companyName: "Google",
    daysPosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Kathmandu"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    companyName: "Amazon",
    daysPosted: "2 weeks ago",
    post: "Backend Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    companyName: "Meta",
    daysPosted: "10 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$38/hr",
    location: "Kathmandu"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    companyName: "Apple",
    daysPosted: "1 month ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    daysPosted: "3 weeks ago",
    post: "Data Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
    companyName: "Microsoft",
    daysPosted: "7 days ago",
    post: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$35/hr",
    location: "Bhaktapur"
  },
  {
    brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
    companyName: "Tesla",
    daysPosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$32/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
    companyName: "NVIDIA",
    daysPosted: "2 months ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Remote"
  }
];
console.log(jobOpenings)

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){

        return <div key={idx}>
        <Card company={elem.companyName} daysPosted = {elem.daysPosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} location = {elem.location} tag2={elem.tag2}/>
        </div>
      })}
      
</div>
  )
}

export default App
