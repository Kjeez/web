/* eslint-disable react/no-unescaped-entities */
import Circles from '/components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_366l3vg',
      'template_z5tunua',
      {
        from_name: form.name,
        to_name: 'kunal',
        from_email: form.email,
        to_email: 'contact@webalchemy.in',
        subject: form.subject,
        message: form.message,
      },
      'AL3rHXPk6d-tYOR3v'
    )
      .then((result) => {
        setLoading(false);
        toast.success('Thank you, I will reach out soon', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });

        setForm({
          name: '',
          email: '',
          subject: '',
          message: '',
        }, (error) => {
          setLoading(false)

          console.log(error);
          toast.error('Error! please email at contact@webalchemy.in', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        })
      })
  }
/* service id - service_366l3vg
   template id - template_z5tunua
   public key - AL3rHXPk6d-tYOR3v */

  return (
    <div className='h-full bg-primary/30'>
      <Circles  />
      <div className=' container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className=' flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden" className='h2 text-center mb-12'>
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden" className=' flex-1 flex flex-col gap-6 w-full mx-auto'>
            <div className='flex gap-x-6 w-full'>

              <input
                type='text'
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder='name'
                className='input' />

              <input type='text'
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder='email'
                className='input' />

            </div>
            <input type='text'
            name="subject"
            value={form.subject}
            onChange={handleChange}
              
              placeholder='subject'
              className='input' />

            <textarea 
            name="message"
            value={form.message}
            onChange={handleChange}
             placeholder='message'
              className=' textarea' />


            <button className='btn rounded-full border border-white/50 max-w-[170px]
            px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className=' group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let's talk</span>
              <BsArrowRight className=' -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100
              transition-all duration-300 absolute text-[22px]'/>
            </button>
          </motion.form>

        </div>
      </div>
    </div>
  )
}

export default Contact