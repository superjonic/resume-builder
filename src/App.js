import * as React from 'react';
import {
  FaCheckSquare as FullCheckIcon,
  FaRegCheckSquare as CheckIcon,
  FaRegComment as CommentIcon,
  FaCheck
} from 'react-icons/fa';

import Details from './components/details';
import FullName from './components/full-name';
import Summary from './components/summary';
import Projects from './components/projects';
import WorkExperience from './components/work-experience';
import Certificates from './components/certificates';
import Education from './components/education';
import Profile from './components/profilepic';
import Interests from './components/interests';

import allData from './data';

export default function App() {
  const [language, setLanguage] = React.useState('english');

  const data = allData[language];

  return (
    <>
      <select onChange={e => setLanguage(e.target.value)}>
        <option value="english">English</option>
        <option value="polish">Polish</option>
      </select>

      <div className="page">
        <div className="column left">
          <Profile />
          <Details data={data.contact} />
          <Details data={data.keySkills} defaultIcon={<FullCheckIcon />} />
          <Details data={data.additionalSkills} defaultIcon={<CheckIcon />} />
          <Details data={data.humanSkills} defaultIcon={<FaCheck />} />
          <Details data={data.languages} defaultIcon={<CommentIcon />} />
          {/* <Details data={data.interests} /> */}
        </div>

        <div className="column right">
          <FullName text={data.fullName} />
          <Summary data={data.summary} />
          <Projects data={data.projects} />
          <WorkExperience data={data.workExperience} />
          {/* <Certificates data={data.certificates} /> */}
          <Education data={data.education} />
          {/* <Details data={data.interests} /> */}
          <Interests data={data.interests}/>
        </div>
      </div>
    </>
  );
}
