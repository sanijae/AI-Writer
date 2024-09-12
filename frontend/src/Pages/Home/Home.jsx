import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
  return (
    <>
       <div className="d-flex justify-content-center">
        <div style={{display: "flex",flexDirection: "column"}}>
            <section className="main_container">
                <section className="hero">
                    <div className="hero_content">
                        <h1 className="h1">Welcome to AI-Writer</h1>
                        <div className='pb-1'>Transforming text with AI-powered tools</div>
                        <div className='pb-3'>Your complete writing solution. </div>
                        <a href="/login" className=" btn-lg primary_button text-decoration-none">Get Started</a>
                    </div>
                    <div className='hero_image'>
                        <img alt='Hero' src={require('../../Assets/images/undraw_Detailed_analysis_re_tk6j.png')} />
                    </div>
                </section>
                <div className="mt-2 flex-column bg-white p-3">
                    <div className="text-center mb-4">
                        <h2 className="h2 font-weight-bold">Perfect Tools For All</h2>
                    </div>
                    <div className="cards">
                        <div className="card_contents cursor-pointer" onClick={()=>navigate('/paraphraser')}>
                            <div className="card_items">
                                <img className="card_image" alt="Paraphraser" src={require('../../Assets/icons/prph.png')} />
                                <div className="card_body">
                                    <h3 className="card-title">Paraphraser</h3>
                                    <p className="card_text text-muted">Revamp your text effortlessly.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card_contents cursor-pointer" onClick={()=>navigate('/summarizer')}>
                            <div className="card_items">
                                <img className="card_image" alt="Summarizer" src={require('../../Assets/icons/sm.jpeg')} />
                                <div className="card_body">
                                    <h3 className="card-title">Summarizer</h3>
                                    <p className="card_text text-muted">Get concise summaries quickly.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card_contents cursor-pointer" onClick={()=>navigate('/plagiarism-check')}>
                            <div className="card_items">
                                <img className="card_image" alt="Plagiarism Check" src={require('../../Assets/icons/pl.png')} />
                                <div className="card_body">
                                    <h3 className="card-title">Plagiarism Check</h3>
                                    <p className="card_text text-muted">Ensure originality in your work.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card_contents cursor-pointer" onClick={()=>navigate('/grammar-checker')}>
                            <div className="card_items">
                                <img className="card_image" alt="Grammar Check" src={require('../../Assets/icons/grm.jpeg')} />
                                <div className="card_body">
                                    <h3 className="card-title">Grammar Check</h3>
                                    <p className="card_text text-muted">Polish your grammar seamlessly.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card_contents cursor-pointer" onClick={()=>navigate('/ai-detector')}>
                            <div className="card_items">
                                <img className="card_image" alt="AI Detector" src={require('../../Assets/icons/aidd.png')} />
                                <div className="card_body">
                                    <h3 className="card-title">AI Detector</h3>
                                    <p className="card_text text-muted">Identify AI-generated content easily.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card_contents cursor-pointer" onClick={()=>navigate('/translator')}>
                            <div className="card_items">
                                <img className="card_image" alt="Translator" src={require('../../Assets/icons/tr1.jpeg')} />
                                <div className="card_body">
                                    <h3 className="card-title">Translator</h3>
                                    <p className="card_text text-muted">Translate text with high accuracy.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card_contents cursor-pointer" onClick={()=>navigate('/citation-generator')}>
                            <div className="card_items">
                                <img className="card_image" alt="Citation Generator" src={require('../../Assets/icons/ct.png')} />
                                <div className="card_body">
                                    <h3 className="card-title">Citation Generator</h3>
                                    <p className="card_text text-muted">Generate citations effortlessly.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card_contents cursor-pointer" onClick={()=>navigate('/ai-writer-flow')}>
                            <div className="card_items">
                                <img className="card_image" alt="AI Flow" src={require('../../Assets/icons/fl.png')} />
                                <div className="card_body">
                                    <h3 className="card-title">AI-writer Flow</h3>
                                    <p className="card_text text-muted">Streamline your workflow efficiently.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" special_card bg-white mt-2">
                    <div className="special_card_content">
                        <div className="special_card_items">
                            <p className="h4">AI-Writer collaborates with you rather than acting independently.</p>
                            <p>AI-Writer assists in creating articulate, refined, and professional writing—significantly reducing the time typically required. Embrace the future of writing.</p>
                            <a className="primary_button btn-xl text-decoration-none my-3" href="/register">Sign up now</a>
                        </div>
                    </div>
                </div>
                <section id="perfect" className="perfect mt-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6 text-center mb-4 mb-md-0">
                            <img src={require('../../Assets/images/undraw_Invite_re_rrcp.png')} className="img-fluid" alt="Writing" />
                            </div>
                            <div className="col-md-6">
                            <h3 className="mb-3">Perfect words, every time</h3>
                            <p className="text-muted">AI-Writer empowers your writing by helping you enhance sentences and refine style without overshadowing your original ideas. We elevate your content, not replace it.</p>
                            </div>
                        </div>
                        <div className="row align-items-center mt-5">
                            <div className="col-md-6 order-md-2 text-center mb-4 mb-md-0">
                            <img src={require('../../Assets/images/undraw_Speed_test_re_pe1f.png')} className="img-fluid" alt="Rocket" />
                            </div>
                            <div className="col-md-6 order-md-1">
                            <h3 className="mb-3">Speed without sacrifice</h3>
                            <p className="text-muted">AI-Writer accelerates your writing process, allowing you to meet deadlines efficiently without compromising quality. It’s like supercharging your writing journey.</p>
                            </div>
                        </div>
                        <div className="row align-items-center mt-5">
                            <div className="col-md-6 text-center mb-4 mb-md-0">
                            <img src={require('../../Assets/images/undraw_Inbox_cleanup_re_jcbh.png')} className="img-fluid" alt="Communication" />
                            </div>
                            <div className="col-md-6">
                            <h3 className="mb-3">Clear, confident communication</h3>
                            <p className="text-muted">Feel assured with AI-Writer. We refine your emails, eliminate embarrassing typos, and ensure your messages are clear and impactful every time you hit send.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="features" className="features mt-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h4 className="section-heading mb-4">Perfect any project with AI-Writer</h4>
                                <p className="section-subheading mb-5">Explore how AI-Writer can benefit various user groups.</p>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6 text-center mb-4 mb-md-0">
                                <img src={require('../../Assets/images/undraw_Books_re_8gea.png')} className="img-fluid" alt="Student"/>
                            </div>
                            <div className="col-md-6">
                                <h3 className="mb-3">For Students</h3>
                                <p className="text-muted">AI-Writer empowers students to enhance their academic papers, presentations, and projects with advanced tools like paraphrasing, summarizing, grammar correction, and citation generation. It ensures clarity and professionalism in their work, saving valuable time for research and revision.</p>
                            </div>
                        </div>
                        <div className="row align-items-center mt-5">
                            <div className="col-md-6 order-md-2 text-center mb-4 mb-md-0">
                                <img src={require('../../Assets/images/undraw_Active_options_re_8rj3.png')} className="img-fluid" alt="Working Professional"/>
                            </div>
                            <div className="col-md-6 order-md-1">
                                <h3 className="mb-3">For Working Professionals</h3>
                                <p className="text-muted">Professionals can leverage AI-Writer to streamline communication, reports, and content creation. It provides efficient tools for writing, editing, and translating documents across multiple languages, ensuring accuracy and professionalism in their deliverables.</p>
                            </div>
                        </div>
                        <div className="row align-items-center mt-5">
                            <div className="col-md-6 text-center mb-4 mb-md-0">
                                <img src={require('../../Assets/images/undraw_Content_creator_re_pt5b.png')} className="img-fluid" alt="Content Creators" />
                            </div>
                            <div className="col-md-6">
                                <h3 className="mb-3">For Content Creators</h3>
                                <p className="text-muted">AI-Writer supports content creators by offering robust tools for content planning, writing, and optimization. From SEO-friendly writing to plagiarism detection and AI-driven content improvement, it enhances productivity and ensures high-quality content creation.</p>
                            </div>
                        </div>
                        <div className="row align-items-center mt-5">
                            <div className="col-md-6 order-md-2 text-center mb-4 mb-md-0">
                                <img src={require('../../Assets/images/undraw_Publish_article_re_3x8h.png')} className="img-fluid" alt="Advanced Academics"/>
                            </div>
                            <div className="col-md-6 order-md-1">
                                <h3 className="mb-3">For Advanced Academics</h3>
                                <p className="text-muted">Advanced academics benefit from AI-Writer's specialized tools for research papers, dissertations, and publications. It includes features like advanced AI detection, citation generation, and comprehensive grammar correction, facilitating rigorous academic writing and publication processes.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="how-it-works" className="how-it-works mt-2 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="how-it-work-heading mb-4">How It Works</h2>
                                <p className="how-it-work--subheading mb-5">Discover the features that make AI-Writer unique.</p>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-4">
                                <div className="how-it-works-item">
                                <div className="icon">
                                    <i className="fas fa-pencil-alt"></i>
                                </div>
                                <h3 className="mb-3">Paraphraser</h3>
                                <p className="text-muted">Enter your text and our AI-powered paraphraser will rewrite it with similar meaning.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="how-it-works-item">
                                <div className="icon">
                                    <i className="fas fa-list-ul"></i>
                                </div>
                                <h3 className="mb-3">Summarizer</h3>
                                <p className="text-muted">Input lengthy documents and receive concise summaries instantly.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="how-it-works-item">
                                <div className="icon">
                                    <i className="fas fa-spell-check"></i>
                                </div>
                                <h3 className="mb-3">Grammar Correction</h3>
                                <p className="text-muted">Submit text for automatic grammar correction and enhancement.</p>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-4">
                                <div className="how-it-works-item">
                                <div className="icon">
                                    <i className="fas fa-search"></i>
                                </div>
                                <h3 className="mb-3">Plagiarism Detector</h3>
                                <p className="text-muted">Check your content for originality against millions of sources.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="how-it-works-item">
                                <div className="icon">
                                    <i className="fas fa-robot"></i>
                                </div>
                                <h3 className="mb-3">AI Detector</h3>
                                <p className="text-muted">Identify AI-generated content within documents.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="how-it-works-item">
                                <div className="icon">
                                    <i className="fas fa-language"></i>
                                </div>
                                <h3 className="mb-3">Translator</h3>
                                <p className="text-muted">Translate text between multiple languages instantly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="why-us" className="why-us mt-2 bg-white">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading mb-4">Why Choose Us?</h2>
                        <p className="section-subheading mb-5">Discover what makes AI-Writer the best choice for text transformation.</p>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                        <div className="why-us-item">
                        <div className="icon">
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <h3 className="mb-3">Advanced AI Technology</h3>
                        <p className="text-muted">Utilize cutting-edge AI algorithms for accurate and reliable text transformation.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="why-us-item">
                        <div className="icon">
                            <i className="fas fa-globe"></i>
                        </div>
                        <h3 className="mb-3">Multilingual Support</h3>
                        <p className="text-muted">Translate and transform text in multiple languages to cater to global audiences.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="why-us-item">
                        <div className="icon">
                            <i className="fas fa-user-shield"></i>
                        </div>
                        <h3 className="mb-3">Privacy and Security</h3>
                        <p className="text-muted">Ensure user data privacy and security with state-of-the-art encryption and secure practices.</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                        <div className="why-us-item">
                        <div className="icon">
                            <i className="fas fa-clock"></i>
                        </div>
                        <h3 className="mb-3">Fast and Reliable</h3>
                        <p className="text-muted">Experience fast and reliable text transformation services with minimal wait times.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="why-us-item">
                        <div className="icon">
                            <i className="fas fa-comments"></i>
                        </div>
                        <h3 className="mb-3">Customer Support</h3>
                        <p className="text-muted">Dedicated customer support available to assist you with any questions or issues.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="why-us-item">
                        <div className="icon">
                            <i className="fas fa-cogs"></i>
                        </div>
                        <h3 className="mb-3">Customization Options</h3>
                        <p className="text-muted">Customize and tailor text transformation tools to meet your specific needs and preferences.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <div className="p-4 my-2 shadow-lg bg-white">
                    <div className="start_card">
                        <div className="start_text">
                            <div className="start_card_body">
                                <p className="h2 my-5">Begin writing with clarity and assurance using AI-Writer</p>
                                <a href='/register' className=" btn-lg primary_button mt-3 text-decoration-none">Start now for free</a>
                            </div>
                        </div>
                        <div className="start_image">
                            <img className="" alt="start icon" src={require('../../Assets/images/undraw_Specs_re_546x.png')} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  </>
  )
}
