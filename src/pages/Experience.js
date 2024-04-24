import React from 'react';
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">

      <VerticalTimelineElement className="vertical-timeline-element--education"
          date="Juin-Juillet 2023"
          iconStyle={{background:'#e9d35b', color:'#fff'}}
          icon={<WorkIcon/>}
        >
        <h3 className="vertical-timeline-element-title">
          Développeur Front-End, FlashDesign
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Paris</h4>
        <p>Développement d'un site e-commerce</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education"
          date="Mars-Avril 2023"
          iconStyle={{background:'#e9d35b', color:'#fff'}}
          icon={<WorkIcon/>}
        >
        <h3 className="vertical-timeline-element-title">
          Développeur FullStack, FEDHUBS
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Paris</h4>
        <p>Développement d'un site de réservation pour restaurants et événements</p>
        </VerticalTimelineElement>


      <VerticalTimelineElement className="vertical-timeline-element--education"
          date="Janvier-Juin 2021"
          iconStyle={{background:'#3e497a', color:'#fff'}}
          icon={<SchoolIcon/>}
        >
        <h3 className="vertical-timeline-element-title">
          IA School, Boulogne-Billancourt
        </h3>
        <p>Niveau M2 Intelligence artificielle</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education"
          date="Juin 2020-Décembre 2021"
          iconStyle={{background:'#e9d35b', color:'#fff'}}
          icon={<WorkIcon/>}
        >
        <h3 className="vertical-timeline-element-title">
          Technicien Homologation, E2TS
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Paris</h4>
        <p>Déterminer des numéros d'identification puis les attribuer
à des véhicules dans une base de données grâce à un
logiciel SAP</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement className="vertical-timeline-element--education"
          date="Septembre 2016-Juin 2017"
          iconStyle={{background:'#3e497a', color:'#fff'}}
          icon={<SchoolIcon/>}
        >

          

        <h3 className="vertical-timeline-element-title">
          Université Paris 6, Paris
        </h3>
        <p>M1 Développement Logiciel</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--education"
          date="Septembre 2013-Juin 2016"
          iconStyle={{background:'#3e497a', color:'#fff'}}
          icon={<SchoolIcon/>}
        >
        <h3 className="vertical-timeline-element-title">
          Université Paris 6, Paris
        </h3>
        <p>Licence Informatique</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience