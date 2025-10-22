import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Github, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { FormEvent, useState, ChangeEvent } from 'react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formError, setFormError] = useState<string>('');

  const validate = (values: FormData): FormErrors => {
    const errors: FormErrors = {};
    
    if (!values.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Please enter a valid email';
    }
    
    if (!values.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!values.message.trim()) {
      errors.message = 'Message is required';
    } else if (values.message.trim().length < 10) {
      errors.message = 'Message should be at least 10 characters';
    }
    
    return errors;
  };

  const errors = validate(formData);
  const isFormValid = Object.keys(errors).length === 0;

  const handleBlur = (field: keyof FormData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (formError) {
      setFormError('');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched to show validation errors
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });
    
    if (!isFormValid) {
      setFormError('Please fix the errors in the form');
      return;
    }
    
    setFormStatus('submitting');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mailtoLink = `mailto:contact@mawuvision.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      setFormStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setTouched({
          name: false,
          email: false,
          subject: false,
          message: false,
        });
        setFormStatus('idle');
      }, 3000);
      
    } catch (error) {
      setFormStatus('error');
      setFormError('Failed to send message. Please try again later.');
      
      // Reset error state after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setFormError('');
      }, 5000);
    }
  };

  const InputField = ({
    name,
    label,
    type = 'text',
    required = true,
    textarea = false,
  }: {
    name: keyof FormData;
    label: string;
    type?: string;
    required?: boolean;
    textarea?: boolean;
  }) => {
    const isTouched = touched[name];
    const error = errors[name];
    const showError = isTouched && error;
    
    const commonProps = {
      id: name,
      name,
      value: formData[name],
      onChange: handleChange,
      onBlur: () => handleBlur(name),
      className: `w-full px-4 py-3 bg-gray-800 border ${
        showError
          ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
          : 'border-gray-700 focus:ring-[#00AEEF] focus:border-[#00AEEF]'
      } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200`,
      required,
      'aria-invalid': showError ? 'true' : 'false',
      'aria-describedby': showError ? `${name}-error` : undefined,
    };
    
    return (
      <div className="mb-6">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        
        {textarea ? (
          <textarea
            {...commonProps}
            rows={5}
            placeholder={`Enter your ${label.toLowerCase()}`}
          />
        ) : (
          <input
            {...commonProps}
            type={type}
            placeholder={`Enter your ${label.toLowerCase()}`}
          />
        )}
        
        <AnimatePresence>
          {showError && (
            <motion.p
              id={`${name}-error`}
              className="mt-2 text-sm text-red-500 flex items-center gap-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <AlertCircle className="h-4 w-4" />
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
  const SubmitButton = () => {
    const isDisabled = formStatus === 'submitting' || (touched.name && !isFormValid);
    
    return (
      <motion.button
        type="submit"
        disabled={isDisabled}
        className={`w-full md:w-auto px-8 py-3.5 font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
          isDisabled
            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-[#00AEEF] to-[#14B8A6] text-white hover:opacity-90 hover:shadow-lg hover:shadow-[#00AEEF]/20'
        }`}
        whileHover={!isDisabled ? { scale: 1.02 } : {}}
        whileTap={!isDisabled ? { scale: 0.98 } : {}}
      >
        {formStatus === 'submitting' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send Message
          </>
        )}
      </motion.button>
    );
  };
  
  const SuccessMessage = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 bg-green-900/30 border border-green-800 rounded-lg flex items-start gap-3 mb-6"
    >
      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
      <div>
        <h3 className="font-medium text-green-100">Message Sent Successfully!</h3>
        <p className="text-sm text-green-300 mt-1">
          Thank you for reaching out. We'll get back to you as soon as possible.
        </p>
      </div>
    </motion.div>
  );
  
  const ErrorMessage = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 bg-red-900/30 border border-red-800 rounded-lg flex items-start gap-3 mb-6"
    >
      <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
      <div>
        <h3 className="font-medium text-red-100">Something went wrong</h3>
        <p className="text-sm text-red-300 mt-1">{formError}</p>
      </div>
    </motion.div>
  );

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@mawuvision.com',
      link: 'mailto:contact@mawuvision.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      content: '1629 K Street NW #300\nWashington, DC 20006\nUnited States',
      link: null,
    },
    {
      icon: MapPin,
      title: 'Ghana Hub',
      content: 'Before Hephzibah Christian Centre\nAburi, Eastern Region',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: Github, url: 'https://github.com', label: 'GitHub' },
  ];

  return (
    <div className="min-h-screen bg-[#0B0C10] pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contact us"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] via-[#0B0C10]/90 to-[#0B0C10]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#14B8A6]">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Exploring an idea, need a sounding board, or curious about our pilots? Drop us a note—we're all ears.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-white">Contact Information</h2>
              <p className="text-gray-400">
                Share as much context as you can and we'll respond within a couple of days with next steps.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-2.5 bg-gray-800/50 rounded-lg text-[#00AEEF]">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-400 hover:text-[#00AEEF] transition-colors duration-200"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-400 whitespace-pre-line">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="pt-4">
                <h3 className="text-lg font-medium text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-gray-800/50 hover:bg-[#00AEEF]/10 rounded-lg text-gray-400 hover:text-[#00AEEF] transition-colors duration-200"
                      whileHover={{ y: -2 }}
                      aria-label={social.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-2">Send us a message</h2>
              <p className="text-gray-400 mb-8">
                Have questions or want to discuss a project? We're here to help.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {formStatus === 'success' && <SuccessMessage />}
                {formStatus === 'error' && <ErrorMessage />}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField 
                    name="name" 
                    label="Your Name" 
                    type="text" 
                  />
                  <InputField 
                    name="email" 
                    label="Email Address" 
                    type="email" 
                  />
                </div>
                
                <InputField 
                  name="subject" 
                  label="Subject" 
                  type="text" 
                />
                
                <InputField 
                  name="message" 
                  label="Your Message" 
                  textarea 
                />
                
                <div className="pt-2">
                  <SubmitButton />
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
