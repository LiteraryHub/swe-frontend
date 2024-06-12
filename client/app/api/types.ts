export interface PrivacySettings {
    [key: string]: string; // This allows dynamic keys with string values
  }
  
  export interface Question {
    questionText: string;
    options: string[];
    id: string;
  }
  
  export interface TabQuestions {
    [key: string]: Question[];
  }
  