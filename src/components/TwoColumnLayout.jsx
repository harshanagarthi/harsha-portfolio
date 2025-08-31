import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import ContentBox from './ContentBox';
// import StickyWrapper from './StickyWrapper';
import skillsData from '../data/skills';
import projectsData from '../data/projects';
import certificationsData from '../data/certifications';

const TwoColumnLayout = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  // Initialize with the first item by default
  useEffect(() => {
    const firstCategory = Object.keys(skillsData)[0]; // "Technical Skills"
    const firstSubcategory = Object.keys(skillsData[firstCategory])[0]; // "Programming Languages"
    setSelectedCategory(firstCategory);
    setSelectedSubcategory(firstSubcategory);
    setSelectedItem({
      type: 'skills',
      category: firstCategory,
      subcategory: firstSubcategory,
      data: skillsData[firstCategory][firstSubcategory]
    });
  }, []);

  const handleItemSelect = (type, category, subcategory) => {
    setSelectedCategory(category);
    setSelectedSubcategory(subcategory);
    
    let data;
    if (type === 'skills') {
      data = skillsData[category][subcategory];
    } else if (type === 'projects') {
      data = projectsData[subcategory];
    } else if (type === 'certifications') {
      data = certificationsData[subcategory];
    }

    setSelectedItem({
      type,
      category,
      subcategory,
      data
    });
  };

  return (
    <section className="py-20 bg-black dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 font-encode-sans-sc">
            Skills, Projects & Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my technical expertise, project portfolio, and professional achievements
          </p>
        </div>
        
        {/* Fixed height container to prevent screen shaking */}
        <div className="max-w-7xl mx-auto h-[800px] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
            {/* Left Column - Sidebar */}
            <div className="lg:col-span-1 h-full overflow-y-auto pr-2 scrollbar-hide">
              <Sidebar 
                onItemSelect={handleItemSelect}
                selectedCategory={selectedCategory}
                selectedSubcategory={selectedSubcategory}
              />
            </div>
            
            {/* Right Column - Content Box */}
            <div className="lg:col-span-2 h-full overflow-y-auto pr-2 scrollbar-hide">
              <ContentBox selectedItem={selectedItem} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnLayout;
