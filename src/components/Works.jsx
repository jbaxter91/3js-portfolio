import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github, url, youtube } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const ProjectCard = ({index, name, description, tags, image, source_code_link, deployed_link, youtube_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 gap-1 card-img_hover '>
          {source_code_link ? 
            <div onClick={() => window.open
              (source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition duration-200 hover:scale-110'
              >
                <img 
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
                />
            </div>
            : null}
              
              {deployed_link ? 
            <div onClick={() => window.open
              (deployed_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition duration-200 hover:scale-110'
              >
                <img 
                src={url}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
                />
            </div>
            : null}

            {youtube_link ? 
            <div onClick={() => window.open
              (youtube_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition duration-200 hover:scale-110'
              >
                <img 
                src={youtube}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
                />
            </div>
            : null}

          </div>

          

        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag, index) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
    <motion.div
      variants={textVariant()}
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          The Projects section of this website showcases a diverse collection of creative and technical endeavors.
          By exploring captivating images and accessing relevant links to code repositories or live websites, 
          visitors can gain insights into the depth and breadth of work completed. This curated selection 
          highlights proficiency in various fields, while demonstrating the ability to tackle challenges, 
          innovate, and bring ideas to life. Dive into this captivating portfolio to discover the passion, skill,
           and dedication that drives each unique project.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={project.index} {...project} index={index}/>
          ))}

      </div>
    
    </>
  )
}

export default SectionWrapper( Works, 'works');