"use client"
import React, { useState } from 'react';
import {
  AppBar, Box, Container, Paper, Typography, Tabs, Tab, Grid, Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider, IconButton, Collapse, CardContent, Button, Tooltip, Breadcrumbs, Link, Modal, Backdrop, Fade
} from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import BarChartIcon from '@mui/icons-material/BarChart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
} from 'chart.js';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  ChartTooltip,
  Legend
);

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA500',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    h3: {
      fontWeight: 'bold',
    },
    subtitle1: {
      fontSize: '1.3rem',
    },
  },
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(4),
  width: '100%',
}));

const data = [
  { name: 'محتوى جنسي', value: 40 },
  { name: 'محتوى ديني', value: 12 },
  { name: 'محتوى غير أخلاقي', value: 8 },
  { name: 'محتوى سياسي', value: 10 },
];

const generateAnalysisData = () => {
  const result = [];
  for (let i = 0; i <= 409; i += 20) {
    result.push({
      name: `الصفحات ${i + 1}-${i + 20}`,
      plagiarism: Math.floor(Math.random() * 50),  // Random plagiarism value between 0 and 50
      contentIssues: Math.floor(Math.random() * 10)  // Random content issues between 0 and 10
    });
  }
  return result;
};

const analysisData = generateAnalysisData();

const ResultsPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleHelpOpen = () => {
    setHelpOpen(true);
  };

  const handleHelpClose = () => {
    setHelpOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl"> {/* Changed maxWidth to "xl" to increase the container width */}
        <StyledPaper elevation={3}>
          <Typography variant="h3" component="h1" gutterBottom color="primary">
            نتائج التحليل 
          </Typography>
    
          <Typography variant="subtitle1" gutterBottom>
          لقد اكتمل تحليل كتابك. وفيما يلي النتائج التفصيلية والأفكار.
          </Typography>

          <Box sx={{ width: '100%', mt: 4 }}>
            <Tabs value={tabValue} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
              <Tab label="الملخص" />
              <Tab label="التفاصيل" />
              <Tab label="الاحصائيات" />
            </Tabs>
          </Box>

          <TabPanel value={tabValue} index={0}>
            <SummarySection />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <DetailsSection expanded={expanded} handleExpandClick={handleExpandClick} />
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <GraphsSection />
          </TabPanel>
        </StyledPaper>
      </Container>
      <Tooltip title="هل تحتاج إلى مساعدة؟" arrow>
        <IconButton color="primary" sx={{ position: 'fixed', bottom: 16, right: 16 }} onClick={handleHelpOpen}>
          <HelpOutlineIcon />
        </IconButton>
      </Tooltip>
      <Modal
        open={helpOpen}
        onClose={handleHelpClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={helpOpen}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}>
            <Typography variant="h6" component="h2">
              المساعدة و مركز الاتصال
            </Typography>
            <Typography sx={{ mt: 2 }}>
            إذا كنت بحاجة إلى أي مساعدة في فهم نتائج التحليل، فيرجى الاتصال بفريق الدعم لدينا على LiteraryHub@aiu.edu.eg
            </Typography>
            <Button onClick={handleHelpClose} sx={{ mt: 2 }}>
              إغلاق
            </Button>
          </Box>
        </Fade>
      </Modal>
    </ThemeProvider>
  );
};

const SummarySection: React.FC = () => (
  <Box sx={{ width: '100%', mt: 4 }}>
    <Typography variant="h4" gutterBottom color="primary">
      ملخص النتائج
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ bgcolor: '#FFA500', mr: 2 }}>
            <CheckCircleIcon />
          </Avatar>
          <Typography variant="h6">
            طبقا للتحليل، يبدو أن كتابك يحتوي على بعض الاقتباسات
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ bgcolor: '#FFA500', mr: 2 }}>
            <ErrorIcon />
          </Avatar>
          <Typography variant="h6">
            يبدو أن كتابك يحتوي على بعض التجاوزات التي قد تؤثر على سلامة القراءة (يرجى العودة إلى اتفاقية سلامة القراءة)
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{ bgcolor: '#FFA500', mr: 2 }}>
            <BarChartIcon />
          </Avatar>
          <Typography variant="h6">
            لقد انتهى التحليل في 42 دقيقة
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </Box>
);

const DetailsSection: React.FC<{ expanded: boolean, handleExpandClick: () => void }> = ({ expanded, handleExpandClick }) => (
  <Box sx={{ width: '100%', mt: 4 }}>
    <Typography variant="h4" gutterBottom color="primary">
      التحليل التفصيلي
    </Typography>
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: '#FFA500' }}>
            <ErrorIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="محتوى سياسي"
          secondary="يحتوي على إشارات إلى الأحداث السياسية الحديثة، ولكن لم يتم العثور على محتوى مثير للجدل."
        />
        <IconButton onClick={handleExpandClick}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </ListItem>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            التحليل التفصيلي: يشمل الكتاب إشارات إلى الأحداث السياسية مثل الانتخابات وتغييرات السياسات. هذه الإشارات واقعية ولا تنقل أي تحيز سياسي.
          </Typography>
        </CardContent>
      </Collapse>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: '#FFA500' }}>
            <ErrorIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="التمييز الديني"
          secondary="يذكر السياقات الدينية ولكن لا يوجد محتوى تمييزي."
        />
        <IconButton onClick={handleExpandClick}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </ListItem>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            التحليل التفصيلي: يشير الكتاب إلى ممارسات دينية مختلفة وأعياد دينية بنبرة محايدة. لم يتم العثور على أي محتوى يميز ضد أي دين.
          </Typography>
        </CardContent>
      </Collapse>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: '#FFA500' }}>
            <ErrorIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="محتوى جنسي"
          secondary="يحتوي على إشارات طفيفة إلى المواضيع الجنسية."
        />
        <IconButton onClick={handleExpandClick}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </ListItem>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            التحليل التفصيلي: هناك إشارات قصيرة إلى العلاقات الرومانسية ومحتوى جنسي طفيف. المحتوى ليس صريحًا ويتناسب مع السياق السردي.
          </Typography>
        </CardContent>
      </Collapse>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: '#FFA500' }}>
            <ErrorIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="محتوى غير أخلاقي"
          secondary="يشمل مناقشات حول الممارسات غير الأخلاقية ولكن بطريقة إعلامية."
        />
        <IconButton onClick={handleExpandClick}>
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </ListItem>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            التحليل التفصيلي: يناقش الكتاب ممارسات غير أخلاقية مختلفة، بما في ذلك الفساد والاحتيال، بنبرة نقدية وإعلامية. يهدف إلى زيادة الوعي بدلاً من الترويج لهذه السلوكيات.
          </Typography>
        </CardContent>
      </Collapse>
    </List>
  </Box>
);

const GraphsSection: React.FC = () => {
  const lineData = {
    labels: analysisData.map(d => d.name),
    datasets: [
      {
        label: 'الانتحال',
        data: analysisData.map(d => d.plagiarism),
        borderColor: '#FFA500',
        backgroundColor: 'rgba(255,165,0,0.5)',
      },
    ],
  };

  const barData = {
    labels: data.map(d => d.name),
    datasets: [
      {
        label: 'قضايا المحتوى',
        data: data.map(d => d.value),
        backgroundColor: '#FFA500',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <Box sx={{ width: '800px', mt: 3, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom color="primary" align="center">
        التمثيل البياني
      </Typography>
      <Box sx={{ mb: 4, height: '800px', width: '700px', mx: 'auto' }}>
        <Typography variant="h6" gutterBottom align="center">
          الانتحال عبر الصفحات
        </Typography>
        <Box sx={{ position: 'relative', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Line data={lineData} options={options} />
        </Box>
      </Box>
      <Box sx={{ mb: 4, height: '800px', width: '700px', mx: 'auto' }}>
        <Typography variant="h6" gutterBottom align="center">
          قضايا المحتوى حسب الفئة
        </Typography>
        <Box sx={{ position: 'relative', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Bar data={barData} options={options} />
        </Box>
      </Box>
      <AudioPreview />
    </Box>
  );
  
  
};

const AudioPreview: React.FC = () => (
  <Box sx={{ width: '100%', mt: 4 }}>
    <Typography variant="h6" gutterBottom>
      معاينة الصوت
    </Typography>
    <AudioPlayer
      src="\audio\AudioBook.mp3" // Use the relative path if the file is in the public directory
      customAdditionalControls={[]}
      customVolumeControls={[]}
      showJumpControls={false}
      layout="horizontal-reverse"
      style={{ borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
    />
    <Typography variant="subtitle1" color="textSecondary">
      مدة التشغيل: ساعتان و49 دقيقة
    </Typography>
  </Box>
);

const TabPanel: React.FC<{ children?: React.ReactNode, index: number, value: number }> = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other }
  >
    {value === index && (
      <Box sx={{ p: 3 }}>
        {children}
      </Box>
    )}
  </div>
);

export default ResultsPage;
