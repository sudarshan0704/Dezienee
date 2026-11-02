export type FaqQuestion = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  title: string;
  questions: FaqQuestion[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "general_information",
    title: "General information",
    questions: [
      {
        question: "What is the typical process for starting a design project?",
        answer:
          "We begin with a conversation about your space, goals, style, and budget. From there, we define the scope, develop a design direction, and agree on the next steps before work begins.",
      },
      {
        question: "How do you ensure the design aligns with my vision?",
        answer:
          "We learn about your preferences and priorities during the initial consultation, then share design concepts for your feedback. Your input guides the decisions made throughout the project.",
      },
      {
        question: "What is your typical project timeline?",
        answer:
          "Timelines vary with the size and complexity of each project, product availability, and construction needs. We provide a project schedule with key milestones once the scope is clear.",
      },
      {
        question: "How can I prepare my space for a design project?",
        answer:
          "It helps to gather inspiration images, note what works and does not work in the space, and list any must-keep items. We will guide you through measurements and any other preparation needed.",
      },
      {
        question: "Do you work with sustainable or eco-friendly materials?",
        answer:
          "Yes. We can discuss durable, responsibly sourced, and lower-impact materials that suit your design goals, budget, and the practical needs of your space.",
      },
    ],
  },
  {
    id: "design_process",
    title: "Design process",
    questions: [
      {
        question: "What is the first step in the design process?",
        answer:
          "The first step is a consultation to understand your space, lifestyle, design preferences, priorities, and budget. This gives us the information needed to recommend a suitable scope and approach.",
      },
      {
        question: "Will I see design concepts before final decisions are made?",
        answer:
          "Yes. We present the proposed design direction and relevant selections for your review, then incorporate your feedback before finalizing the details.",
      },
      {
        question: "How involved can I be in the design process?",
        answer:
          "Your involvement is welcome at every key stage. We agree on review points together, gather your feedback, and keep you informed as the design develops.",
      },
      {
        question: "Do you manage all aspects of the project?",
        answer:
          "The services provided depend on the agreed project scope. We clarify which design, sourcing, coordination, and implementation tasks we will manage before the project starts.",
      },
      {
        question: "Can you incorporate existing furniture or decor into the new design?",
        answer:
          "Absolutely. We can assess the pieces you want to keep and incorporate them into the new plan where they fit your needs and the overall design.",
      },
    ],
  },
  {
    id: "project_completion",
    title: "Project completion",
    questions: [
      {
        question: "How do you ensure the project is completed on time?",
        answer:
          "We set out a schedule with clear milestones and monitor progress throughout the project. If a change or supply delay affects the timeline, we communicate the impact and discuss the next steps.",
      },
      {
        question: "Will I be involved in the final stages of the project?",
        answer:
          "Yes. We keep you involved in final reviews and walkthroughs so you can confirm the completed work and raise any remaining questions.",
      },
      {
        question: "How do you handle any changes or adjustments during the project?",
        answer:
          "We review requested changes with you, explain how they may affect the scope, schedule, or budget, and agree on the approach before moving forward.",
      },
      {
        question: "How do I know if the design is fully implemented as planned?",
        answer:
          "We review the finished space against the agreed design and project scope, and walk through the completed work with you to address any outstanding items.",
      },
      {
        question: "What happens after the project is completed?",
        answer:
          "At handover, we review the finished space and share any relevant care or maintenance guidance. If you have follow-up questions, you can get in touch with our team.",
      },
    ],
  },
  {
    id: "design_consultation",
    title: "Design consultation",
    questions: [
      {
        question: "What can I expect during the initial consultation?",
        answer:
          "We discuss your design goals, preferences, space, and requirements, then talk through how the project could move forward and which services may be a good fit.",
      },
      {
        question: "Do I need to prepare anything for the consultation?",
        answer:
          "Preparation is optional, but inspiration images, room measurements, photos, and a list of priorities can help us understand your vision and make the conversation more productive.",
      },
      {
        question: "How long does the design consultation last?",
        answer:
          "The consultation length depends on the project and the topics you would like to cover. We can confirm the expected duration when scheduling your appointment.",
      },
      {
        question: "Is the consultation free of charge?",
        answer:
          "Consultation fees can depend on the type of meeting and project scope. Please contact us to confirm the applicable fee and what is included before booking.",
      },
    ],
  },
];
