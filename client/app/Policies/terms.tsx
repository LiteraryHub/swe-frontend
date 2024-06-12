'use client'
import { useState } from 'react';
import { Container, Typography, Box, Button, Checkbox, FormControlLabel, createTheme, ThemeProvider } from '@mui/material';
import Head from 'next/head';

const theme = createTheme({
    direction: 'rtl',
    // you can customize your theme here
  });

const TermsAndConditions = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
   
      <div dir="rtl">
      <Head>
        <title>البنود والشروط</title>
      </Head>
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          البنود والشروط
        </Typography>

        <Typography variant="body1" paragraph>مرحبًا بك في LiteraryHub </Typography>

        <Typography variant="body1" paragraph>
          توضح هذه البنود والشروط القواعد واللوائح لاستخدام موقع الويب LiteraryHub، الموجود على موقع الويب LiteraryHub.com.
        </Typography>

        <Typography variant="body1" paragraph>
          بالدخول إلى هذا الموقع الإلكتروني، نفترض أنك تقبل هذه البنود والشروط. لا تواصل استخدام LiteraryHub إذا لم تكن موافقًا على اتخاذ جميع البنود والشروط المذكورة في هذه الصفحة.
        </Typography>

        <Typography variant="body1" paragraph>
          ينطبق المصطلح التالي على هذه البنود والشروط، بيان الخصوصية، وإشعار إخلاء المسؤولية وجميع الاتفاقيات: "العميل"، "أنت"، و "أنت" يشير إليك، الشخص الذي يسجل الدخول إلى هذا الموقع الإلكتروني ويلتزم ببنود وشروط الشركة. "الشركة"، "أنفسنا"، "نحن"، "نحن"، و "نا"، تشير إلى شركتنا. "حزب"، "الأطراف"، أو "نا"، يشير إلى العميل وأنفسنا. تشير جميع المصطلحات إلى العرض والقبول والنظر في الدفع الضروري للقيام بعملية المساعدة للعميل بأكثر الطرق مناسبة لتلبية احتياجات العميل فيما يتعلق بتوفير الخدمات المعلنة للشركة، وفقًا للقانون السائد وفقًا له، وإلى المصطلحات أعلاه أو كلمات أخرى في العدد الأولي، الجمع، ترسيم الأحرف الكبيرة و / أو هو / هي أو هما، وتُعتبر قابلة للتبديل وبالتالي يتم الإشارة إلى نفسها.
        </Typography>

        <Typography variant="h5" gutterBottom>الكوكيز</Typography>

        <Typography variant="body1" paragraph>
          نستخدم ملفات تعريف الارتباط. من خلال الوصول إلى LiteraryHub، فإنك توافق على استخدام ملفات تعريف الارتباط بموجب سياسة الخصوصية لـ LiteraryHub.
        </Typography>

        <Typography variant="body1" paragraph>
          تستخدم معظم المواقع التفاعلية ملفات تعريف الارتباط لتمكيننا من استرداد تفاصيل المستخدم لكل زيارة. تُستخدم ملفات تعريف الارتباط من قبل موقعنا على الويب لتمكين وظيفة مناطق معينة لتسهيل زيارة الموقع من قبل الأشخاص. قد تستخدم بعض شركاءنا التابعين / الإعلانات ملفات تعريف الارتباط أيضًا.
        </Typography>

        <Typography variant="h5" gutterBottom>الترخيص</Typography>

        <Typography variant="body1" paragraph>
          مالم ينص خلاف ذلك، يمتلك LiteraryHub و / أو المرخصون له جميع حقوق الملكية الفكرية لجميع المواد على LiteraryHub. جميع حقوق الملكية الفكرية محفوظة. يمكنك الوصول إلى هذا من LiteraryHub لاستخدامك الشخصي الخاص بك تخضع للقيود المحددة في هذه البنود والشروط.
        </Typography>

        <Typography variant="body1">لا يجب عليك:</Typography>

        <Box component="ul">
          <Typography component="li" variant="body1">إعادة نشر المواد من LiteraryHub</Typography>
          <Typography component="li" variant="body1">بيع أو تأجير أو ترخيص المواد من LiteraryHub</Typography>
          <Typography component="li" variant="body1">استنساخ أو تكرار أو نسخ المواد من LiteraryHub</Typography>
          <Typography component="li" variant="body1">إعادة توزيع المحتوى من LiteraryHub</Typography>
        </Box>

        <Typography variant="body1" paragraph>
          يبدأ هذا الاتفاق في التاريخ الحالي.
        </Typography>

        <Typography variant="body1" paragraph>
          يحتفظ LiteraryHub بالحق في مراقبة جميع التعليقات وإزالة أي تعليقات يمكن اعتبارها غير مناسبة أو مسيئة أو تسبب انتهاكًا لهذه البنود والشروط.
        </Typography>

        <Typography variant="body1">تضمن وتمثل أن:</Typography>

        <Box component="ul">
          <Typography component="li" variant="body1">أنت مخول بنشر التعليقات على موقعنا على الويب ولديك جميع التراخيص والموافقات اللازمة للقيام بذلك؛</Typography>
          <Typography component="li" variant="body1">لا تعتدي التعليقات على أي حقوق الملكية الفكرية، بما في ذلك على سبيل الحصر حقوق الطبع والنشر والبراءات أو العلامات التجارية لأي طرف ثالث؛</Typography>
          <Typography component="li" variant="body1">لا تحتوي التعليقات على أي مواد مجديفة أو مسيئة أو غير لائقة أو غير قانونية والتي تشكل انتهاكًا للخصوصية</Typography>
          <Typography component="li" variant="body1">لن يتم استخدام التعليقات لطلب الأعمال التجارية أو الترويج للأعمال التجارية أو تقديم أنشطة تجارية أو أنشطة غير قانونية.</Typography>
        </Box>

        <Typography variant="body1" paragraph>
          تمنحك هنا LiteraryHub ترخيصًا غير حصري لاستخدام واستنساخ وتحرير وترخيص الآخرين لاستخدام واستنساخ وتحرير أي من تعليقاتك بأي أشكال أو صيغ أو وسائط.
        </Typography>
        <Typography variant="h5" gutterBottom>ربط المحتوى الخاص بنا</Typography>

        <Typography variant="body1" paragraph>
          يمكن للمؤسسات التالية ربط موقعنا على الويب دون الحصول على موافقة مكتوبة مسبقة:
        </Typography>

        <Box component="ul">
          <Typography component="li" variant="body1">الجهات الحكومية؛</Typography>
          <Typography component="li" variant="body1">محركات البحث؛</Typography>
          <Typography component="li" variant="body1">وسائل الإعلام؛</Typography>
          <Typography component="li" variant="body1">موزعو الدليل عبر الإنترنت قد يقومون بربط موقعنا على الويب بنفس الطريقة التي يقومون بها بربط مواقع الويب للشركات الأخرى المدرجة؛ و</Typography>
          <Typography component="li" variant="body1">الشركات المعتمدة على نطاق النظام باستثناء المنظمات الغير ربحية التي تطلب التبرعات، ومراكز التسوق الخيرية، ومجموعات جمع التبرعات الخيرية التي قد لا تربط بموقع الويب الخاص بنا.</Typography>
        </Box>

        <Typography variant="h5" gutterBottom>إطارات النوافذ الفورية</Typography>

        <Typography variant="body1" paragraph>
          بدون موافقة مسبقة وكتابية، قد لا تنشئ إطارات حول صفحات الويب الخاصة بنا التي تغير بأي شكل من الأشكال العرض البصري أو المظهر لموقع الويب الخاص بنا.
        </Typography>

        <Typography variant="h5" gutterBottom>مسؤولية المحتوى</Typography>

        <Typography variant="body1" paragraph>
          لا نتحمل مسؤولية أي محتوى يظهر على موقع الويب الخاص بك. توافق على حمايتنا والدفاع عنا ضد جميع الادعاءات التي تنشأ على موقع الويب الخاص بك. لا يجب أن تظهر أي روابط على أي موقع ويب قد يتم تفسيرها على أنها مجديفة أو مخلة بالأخلاق أو غير قانونية، أو التي تنتهك، وتنتهك بطريقة أو بأخرى، أو تدعو إلى انتهاك أو انتهاك حقوق أي طرف ثالث.
        </Typography>

        <Typography variant="h5" gutterBottom>احتفاظ الحقوق</Typography>

        <Typography variant="body1" paragraph>
          نحتفظ بالحق في طلب إزالة جميع الروابط أو أي رابط معين إلى موقعنا على الويب. توافق على إزالة جميع الروابط إلى موقعنا على الويب فور طلبها. كما نحتفظ بالحق في تعديل هذه البنود والشروط وسياسة الربط في أي وقت. من خلال الربط المستمر إلى موقعنا على الويب، فإنك توافق على أن تلتزم وتتبع هذه الشروط والأحكام المتعلقة بالربط.
        </Typography>

        <Typography variant="h5" gutterBottom>إزالة الروابط من موقعنا على الويب</Typography>

        <Typography variant="body1" paragraph>
          إذا وجدت أي رابط على موقعنا على الويب يكون مسيئًا لأي سبب، فأنت حر في الاتصال وإبلاغنا في أي وقت. سننظر في الطلبات لإزالة الروابط ولكن ليس علينا أو إلزامنا بالقيام بذلك أو الرد عليك مباشرة.
        </Typography>

        <Typography variant="h5" gutterBottom>إخلاء المسؤولية</Typography>

        <Typography variant="body1" paragraph>
          إلى أقصى حد يسمح به القانون المعمول به، نستبعد جميع التصورات والضمانات والشروط المتعلقة بموقعنا على الويب واستخدام هذا الموقع. لن يقتصر هذا الإخلاء من مسؤوليتنا أو مسؤوليتك عن الوفاة أو الإصابة الشخصية؛ لن يحد هذا الإخلاء أو يستبعد مسؤوليتنا أو مسؤوليتك عن الاحتيال أو التمثيل الغير حقيقي؛ لن يحد هذا الإخلاء أيًا من مسؤولياتنا أو مسؤولياتك بأي طريقة لا يسمح بها بموجب القانون المعمول به؛ أو استبعاد أيًا من مسؤولياتنا أو مسؤولياتك التي قد لا يكون بإمكاننا استبعادها بموجب القانون المعمول به.
        </Typography>

        <Typography variant="body1" paragraph>
          تحكم القيود والحظرات في المسؤولية المحددة في هذا القسم وفي أي مكان آخر في هذا الإخلاء: (أ) يخضع للفقرة السابقة؛ و (ب) يحكم كل المسؤوليات الناشئة في إطار الإخلاء، بما في ذلك المسؤوليات الناشئة في العقد، وفي الظلم، وعند انتهاك الواجب القانوني.
        </Typography>

        <Typography variant="body1" paragraph>
          طالما أن الموقع والمعلومات والخدمات المقدمة على الموقع مجانية، فإننا لن نكون مسؤولين عن أي خسارة أو ضرر من أي نوع.
        </Typography>

        <FormControlLabel
          control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} color="primary" />}
          label="أوافق على البنود والشروط"
        />
         <Typography variant="body1" paragraph>
        </Typography>

        <Button variant="outlined" color="primary" disabled={!isChecked} sx={{ mt: 4 , fontWeight:'bold'}}>
          متابعة
        </Button>
      </Container>
      </div>
    </>
  );
};

export default TermsAndConditions;
