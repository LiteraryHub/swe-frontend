import { Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextareaAutosize  } from '@mui/material';
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import styles from '@/styles/ProfilePage/AuthorProfilePage/aboutcard.module.css';
import CloseIcon from '@mui/icons-material/Close';

interface Publisher{
  about:string;
}

function About(props : Publisher) {
  const [open, setOpen] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  const [aboutContent, setAboutContent] = useState(props.about)
  const [expanded, setExpanded] = useState(false);

  const handleOpen = () => {
    setTextareaValue(aboutContent);
    setOpen(true);
   
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };

  const handleSave = () => {
    setAboutContent(textareaValue);
    setOpen(false);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
    <Paper className={`${styles.paper} ${expanded ? styles.expandedPaper : ''}`}>
      <div className="content">
        <EditIcon className={styles.edit} onClick={handleOpen} />
        <div className="text" style={{ textAlign: 'right' }}>
          <h4 className={styles.title}>حول</h4>
          <p className={styles.about} dir='rtl'>
            {aboutContent.length > 200 && !expanded ? `${aboutContent.substring(0, 200)}...` : aboutContent}
            {aboutContent.length > 200 && (
              <Button onClick={toggleExpand} color="primary" style={{ textTransform: 'none' }}>
                {expanded ? 'عرض أقل' : 'عرض المزيد'}
              </Button>
            )}
          </p>
        </div>
      </div>
    </Paper>
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm" sx={{ direction: 'rtl' }}>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: "bold", color: "black" }} >
        تعديل الحول
        <Button sx={{ marginRight: "400px", fontWeight: "lighter", color: "gray" }} onClick={handleClose} color="primary">
          <CloseIcon />
        </Button>
      </DialogTitle>
      <DialogContent className="dialogContent">
        <TextareaAutosize
          dir='rtl'
          minRows={5}
          placeholder="اكتب شيئًا عن نفسك..."
          value={textareaValue}
          onChange={handleTextareaChange}
          autoFocus
          className="textArea"
          style={{ width: '100%'}}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} color="primary">
          حفظ
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  
  );
}

export default About;
