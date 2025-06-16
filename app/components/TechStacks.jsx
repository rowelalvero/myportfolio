import React from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { motion } from "motion/react"

const TechStacks = () => {
  // Group icons by category
  const techCategories = [
    {
      title: 'Programming Languages',
      items: [
        { name: 'Python', icon: assets.pythonSVG },
        { name: 'C', icon: assets.cSVG },
        { name: 'C#', icon: assets.csharpSVG },
        { name: 'Java', icon: assets.javaSVG },
        { name: 'JavaScript', icon: assets.javascriptSVG },
        { name: 'TypeScript', icon: assets.typescriptSVG },
        { name: 'PHP', icon: assets.php },
        { name: 'Dart', icon: assets.dartSVG },
      ]
    },
    {
      title: 'Frontend Frameworks',
      items: [
        { name: 'React.js', icon: assets.reactSVG },
        { name: 'Vue.js', icon: assets.vuejsSVG },
        { name: 'Next.js', icon: assets.nextjsSVG },
        { name: 'Tailwind CSS', icon: assets.tailwindSVG },
        { name: 'Bootstrap', icon: assets.bootstrapSVG },
        { name: 'Flutter', icon: assets.flutterSVG },
      ]
    },
    {
      title: 'Backend',
      items: [
        { name: 'Node.js', icon: assets.nodeSVG },
        { name: 'Laravel', icon: assets.laravelSVG },
        { name: 'Flask', icon: assets.flaskSVG },
        { name: 'ASP.NET', icon: assets.aspnet }
      ]
    },
    {
      title: 'Database Management',
      items: [
        { name: 'PostgreSQL', icon: assets.postgresqlSVG },
        { name: 'MySQL', icon: assets.mysqlSVG },
        { name: 'MSSQL', icon: assets.mssql },
        { name: 'Firebase', icon: assets.firebase }
      ]
    },
    {
      title: 'Deployment & Cloud Platforms',
      items: [
        { name: 'Azure', icon: assets.azureSVG },
        { name: 'Vercel', icon: assets.vercelSVG },
        { name: 'Firebase', icon: assets.firebase }
      ]
    },
    {
      title: 'Version Control',
      items: [
        { name: 'Git', icon: assets.gitSVG },
        { name: 'GitHub', icon: assets.githubSVG }
      ]
    },
    {
      title: 'Development Tools',
      items: [
        { name: 'VSCode', icon: assets.vscodeSVG },
        { name: 'PyCharm', icon: assets.pycharmSVG },
        { name: 'Visual Studio', icon: assets.visualstudio },
        { name: 'Android Studio', icon: assets.androidStudioSVG },
        { name: 'Unity', icon: assets.unitySVG },
      ]
    },
    {
      title: 'UI/UX Design',
      items: [
        { name: 'Figma', icon: assets.figma }
      ]
    }
  ];

  return (
    <div className="tech-stacks-container p-8 max-w-6xl mx-auto">
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      className='text-center mb-2 text-lg font-Ovo'>Tools I use</motion.h4>
      <motion.h2 
      initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      className='text-center text-5xl font-Ovo'>My Tech Stacks</motion.h2>
      
      <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
        {techCategories.map((category, index) => (
          <div key={index} className="category-card bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">{category.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="tech-item flex flex-col items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition">
                  {item.icon ? (
                    <Image 
                      src={item.icon} 
                      alt={item.name} 
                      className="w-12 h-12 object-contain mb-2"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-full mb-2"></div>
                  )}
                  <span className="text-sm text-center">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStacks;