import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "text-segmentation",
    title: "Text-Prompted Image Segmentation for Quality Assurance",
    description: "Developed a lightweight, text-conditioned segmentation model (CLIPSeg) for drywall quality assurance. Achieved 0.55 mIoU and 0.94 Pixel Accuracy for zero-shot defect detection, enabling automated quality control without extensive labeled training data.",
    image: "/projects/sample_from_crack_seam.png",
    tags: ["CLIP", "Vision-Language Models", "Segmentation", "Zero-Shot Learning", "Quality Assurance"],
    links: {
      github: "https://github.com/itsreddy/prompted-segmentation-for-drywall-QA",
    },
  },
  {
    id: "asd-diagnosis",
    title: "Predicting ASD Diagnosis in Children with Eye Gaze Data",
    description: "Developed two machine learning approaches using synthetic saccade patterns and image-based methods to automatically classify autism spectrum disorder (ASD) from children's eye gaze data. Combined generative models with deep learning classifiers and CNN/RNN architectures for holistic analysis.",
    image: "/projects/prash-asd-gaze.png",
    tags: ["Deep Learning", "Computer Vision", "GANs", "PyTorch", "Medical AI", "CNN", "RNN"],
    links: {
      publication: "https://doi.org/10.1016/j.image.2021.116198",
    },
  },
    {
    id: "gaze-tracking",
    title: "Gaze Direction Tracking in Infants",
    description: "Developed CNN-based machine learning models for predicting eye-gaze direction in infants. Implemented 3D head pose estimation using facial landmarks to determine yaw, roll, and pitch from 2D images, enabling accurate gaze tracking for developmental research.",
    image: "/projects/prash_Screenshot_45_crop.png",
    tags: ["CNN", "Facial Landmarks", "3D Pose Estimation", "Computer Vision", "TensorFlow"],
    links: {
      demo: "https://drive.google.com/file/d/1EsVt26cu_6SYCiyLcNBucmRdOPORtQOo/view?usp=sharing",
    },
  },
  {
    id: "eye-synthesis",
    title: "Eye Image Synthesis & Gaze Estimation using GANs",
    description: "Built DCGANs for synthetic eye image generation to augment training data for gaze estimation models. Developed custom evaluation metrics based on categorical cross-entropy loss to quantify the realism of generated images, improving gaze estimation accuracy by 35%.",
    image: "/projects/prash_sample-images-crop.gif",
    tags: ["DCGAN", "Generative Models", "Data Augmentation", "Computer Vision", "PyTorch"],
    links: {
      demo: "https://drive.google.com/file/d/1EsVt26cu_6SYCiyLcNBucmRdOPORtQOo/view?usp=sharing",
    },
  },
];
