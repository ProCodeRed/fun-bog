import { Footer, FooterCopyright, FooterDivider } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsTwitterX, BsGithub, BsLinkedin } from 'react-icons/bs'

const PageFooter = () => {

    return (
        <Footer container className='border-t-4 border-teal-200'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                        <Link to={"/"} className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Fun Blog</Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
                        <div>
                            <Footer.Title title='About' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>Abc Link</Footer.Link>
                                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>Def Link</Footer.Link>
                                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>Ghk Link</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Follow us' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>GitHub Link</Footer.Link>
                                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>Discord Link</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Legal' />
                            <Footer.LinkGroup col>
                                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>Privacy Policy</Footer.Link>
                                <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <FooterDivider />
                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright href='#' by='Fun Blog' year={new Date().getFullYear()} />
                    <div className='flex gap-6 sm:mt-4 mt-4 sm:justify-center'>
                        <Footer.Icon href='#' icon={BsFacebook} />
                        <Footer.Icon href='#' icon={BsInstagram} />
                        <Footer.Icon href='#' icon={BsTwitterX} />
                        <Footer.Icon href='#' icon={BsGithub} />
                        <Footer.Icon href='#' icon={BsLinkedin} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default PageFooter