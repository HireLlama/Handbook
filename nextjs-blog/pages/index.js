import Nav from '../components/Nav'

const IndexPage = () => (
  <>
    <Nav />

    <h1>Hire Llama Handbook</h1>
    <p>Hadnbook Page - Testing Version 1</p>

    <div>
      <h2>Company</h2>
      <ul>
        <a href="#"><li>Vision</li></a>
        <li>Strategy</li>
        <li>Handbook</li>
        <li>Onboarding</li>
        <li>Team</li>
        <li>Communication</li>
        <li>Tech Stack</li>
      </ul>
    </div>
    <div id="People Operations" >
      <h2>People Operations</h2>
      <ul>
        <li>Leadership Team</li>
        <li>Country Leaders</li>
        <li>Support Team</li>
        <li>Engineering</li>
      </ul>

    </div>
  </>
)

export default IndexPage
