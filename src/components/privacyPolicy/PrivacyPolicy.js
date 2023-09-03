import React from 'react'
import './privacyPolicy.scss'
import { Link, useNavigate } from 'react-router-dom'

function PrivacyPolicy() {
  const navigate = useNavigate();
  return (
    <div className='container privacy-policy'>
      <p className='go-back' onClick={() => navigate(-1)}><span>« </span>Go back</p>
      <h2>Privacy policy</h2>
      <p>When you use our services, you’re trusting us with your information. We understand this is a big responsibility and work hard to protect your information and put you in control.</p>
      <p>This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information.</p>
      <p>You can use our services in a variety of ways to manage your privacy. For example, you can sign up for a Google Account if you want to create and manage content like emails and photos, or see more relevant search results. And you can use many Google services when you’re signed out or without creating an account at all, like searching on Google or watching YouTube videos. You can also choose to browse the web in a private mode, like Chrome Incognito mode. And across our services, you can adjust your privacy settings to control what we collect and how your information is used.</p>
      <p>To help explain things as clearly as possible, we’ve added examples, explanatory videos, and definitions for key terms. And if you have any questions about this Privacy Policy, you can <Link to='/contacts'>contact us</Link></p>
    </div>
  )
}

export default PrivacyPolicy