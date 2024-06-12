'use client';

import axios from "axios";
import { signIn, useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
import { toast } from "react-hot-toast";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   if (session?.status === 'authenticated') {
  //     router.push('/conversations')
  //   }
  // }, [session?.status, router]);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      role: 'Reader' // الدور الافتراضي
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
  
    if (variant === 'REGISTER') {
      axios.post('/api/register', data)
        .then(() => {
          setIsLoading(false); // توقف التحميل لأننا لا نسجل الدخول تلقائيًا
          toast.success('يمكنك الآن تسجيل الدخول'); // عرض رسالة للمستخدم
          setVariant('LOGIN'); // تغيير المتغير إلى 'تسجيل الدخول'
        })
        .catch(() => toast.error('حدث خطأ ما!'))
    }
  
    if (variant === 'LOGIN') {
      axios.get(`http://localhost:3008/api/user/${data.email}`)
        .then(response => {
          const userRole = response.data.role;
          if (userRole === 'Reader') {
            router.push('/HomePage/Reader');
          } else if (userRole === 'Author') {
            router.push('/HomePage/Author');
          } else if (userRole === 'Publisher') {
            router.push('/HomePage/Publisher');
          } else {
            toast.error('دور غير صالح!'); // التعامل مع قيمة دور غير متوقعة
          }
        })
        .catch(error => {
          if (error.response && error.response.status === 404) {
            toast.error('المستخدم غير موجود!');
          } else {
            toast.error('خطأ في جلب المستخدم أو خطأ داخلي في الخادم!');
          }
          setIsLoading(false);
        });
    }
    
  }
  

  return (
    <div dir="rtl" className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
        className="
        bg-white
          px-4
          py-8
          shadow
          sm:rounded-lg
          sm:px-10
        "
      >
        <form 
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {variant === 'REGISTER' && (
            <>
              <Input
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                id="name"
                label="الاسم"
              />
            </>
          )}
          <Input
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            id="email"
            label="عنوان البريد الإلكتروني"
            type="email"
          />
          <Input
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            id="password"
            label="كلمة المرور"
            type="password"
          />
          {variant === 'REGISTER' && (
            <div>
              <span className="block text-sm font-medium text-gray-700">الدور</span>
              <div className="mt-1 grid grid-cols-3 gap-4">
                <div className="flex items-center">
                  <input
                    id="reader"
                    {...register("role")}
                    value="Reader"
                    type="radio"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="reader" className="ml-2 block text-sm text-gray-900">
                    القارئ
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="publisher"
                    {...register("role")}
                    value="Publisher"
                    type="radio"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="publisher" className="ml-2 block text-sm text-gray-900">
                    الناشر
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="author"
                    {...register("role")}
                    value="Author"
                    type="radio"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  />
                  <label htmlFor="author" className="ml-2 block text-sm text-gray-900">
                    الكاتب
                  </label>
                </div>
              </div>
            </div>
          )}
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === 'LOGIN' ? 'تسجيل الدخول' : 'تسجيل'}
            </Button>
          </div>
        </form>


        <div className="mt-6">
          <div className="relative">
            <div
              className="
                absolute 
                inset-0 
                flex 
                items-center
              "
            >
              <div className="w-full border-t border-gray-300" />
            </div>

          </div>



        </div>
        <div
          className="
            flex 
            gap-2 
            justify-center 
            text-sm 
            mt-6 
            px-2 
            text-gray-500
          "
        >
          <div>
            {variant === 'LOGIN' ? 'لا تملك حسابًا؟' : 'هل لديك حساب بالفعل؟'}
          </div>
          <div
            onClick={toggleVariant}
            className="underline cursor-pointer"
          >
            {variant === 'LOGIN' ? 'إنشاء حساب' : 'تسجيل الدخول'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
