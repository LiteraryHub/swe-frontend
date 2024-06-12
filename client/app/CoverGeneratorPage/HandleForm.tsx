import React, { ChangeEvent } from 'react';
import styles from '@/styles/CoverGeneratorPage/handleform.module.css';

function HandleForm() {
  const MAX_TOKENS = 77;

  const [formData, setFormData] = React.useState({
    title: '',
    author: '',
    summary: '',
  });
  const [tokenCount, setTokenCount] = React.useState(0);
  const [coverImage, setCoverImage] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const id = React.useId();

  function countTokens(text: string): number {
    const words = text.split(/\s+/).filter((word) => word.trim() !== '');
    return words.length;
  }

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };

      if (event.target.name === 'summary') {
        const count = countTokens(updatedFormData.summary);
        setTokenCount(count);

        if (count <= MAX_TOKENS) {
          return updatedFormData;
        } else {
          const truncatedText = truncateText(updatedFormData.summary, MAX_TOKENS);
          setTokenCount(MAX_TOKENS);
          return { ...prevFormData, summary: truncatedText };
        }
      }

      return updatedFormData;
    });
  }

  function truncateText(text: string, maxTokens: number): string {
    const words = text.split(/\s+/).filter((word) => word.trim() !== '');
    return words.slice(0, maxTokens).join(' ');
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/generate-cover', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          book_title: formData.title,
          book_summary: formData.summary,
          arabic_authors: [formData.author],
          num_inference_steps: 5,
          guidance_scale: 0.6,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate book cover');
      }

      const imageBlob = await response.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setCoverImage(imageObjectURL);
    } catch (error) {
      console.error(error);
      alert('Error generating book cover');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div dir="rtl">
      <form onSubmit={handleSubmit} className={styles.rtlForm}>
        <label htmlFor={id + '-Title'}>العنوان</label>
        <br />
        <input
          type="text"
          onChange={handleChange}
          name="title"
          placeholder="العنوان"
          value={formData.title}
          className={styles.input}
          id={id + '-Title'}
        />
        <br />
        <br />
        <label htmlFor={id + '-Author'}>المؤلفين</label>
        <br />
        <input
          type="text"
          onChange={handleChange}
          name="author"
          placeholder="المؤلفين"
          value={formData.author}
          className={styles.input}
          id={id + '-Author'}
        />
        <br />
        <br />
        <label htmlFor={id + '-Summary'}>الملخص</label>
        <br />
        <textarea
          value={formData.summary}
          onChange={handleChange}
          name="summary"
          placeholder="الحد الأقصى للكلمات: 77"
          className={styles.text}
          id={id + '-Summary'}
        />
        <div>
          عدد الكلمات: {tokenCount}
        </div>
        <br />
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? 'جاري التوليد...' : 'توليد'}
        </button>
      </form>
      {coverImage && (
        <div>
          <h2 className={styles.head}>غلاف الكتاب</h2>
          <img src={coverImage} alt="Generated Book Cover" className={styles.coverImage} />
        </div>
      )}
    </div>
  );
}

export default HandleForm;
