// 🔸 Templates
import Template1 from './template1.png';
import Template2 from './template2.png';
import Template3 from './template3.png';
import Template4 from './template4.png';
import Template5 from './template5.png';

// 🔸 Other assets
import upload_area from './upload_area.png';
import logo from './logo.png';

// 🔸 Feature section images (Landing only)
import landing1 from './Landing1.png';
import landing2 from './Landing2.png';
import landing3 from './Landing3.png';
import landing4 from './Landing4.png';

// 🔸 Hero Section - Slider Images only
import imagee1 from './imagee1.jpg';
import imagee2 from './imagee2.jpg';
import imagee3 from './imagee3.jpg';
import imagee4 from './imagee4.jpg';

// Export normal assets
export const assets = {
  Template1,
  Template2,
  Template3,
  Template4,
  Template5,
  upload_area,
  logo,
  landing1,
  landing2,
  landing3,
  landing4,
};

// ✅ Rename export to match your JSX
export const sliderImages = {
  imagee1,
  imagee2,
  imagee3,
  imagee4,
};

// ✅ Fix: use correct variable names here
export const templates = [
  { id: "template1", label: "Template 1", image: Template1 },
  { id: "template2", label: "Template 2", image: Template2 },
  { id: "template3", label: "Template 3", image: Template3 },
  { id: "template4", label: "Template 4", image: Template4 },
  { id: "template5", label: "Template 5", image: Template5 },
];
