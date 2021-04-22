import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            {/* <!-- ============================================================= FOOTER ============================================================= --> */}
            <footer id="footer" class="footer color-bg">
                <div class="footer-bottom" style={{ backgroundColor: "#042417" }}>
                    <div class="container" style={{ color: "white" }}>
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-5">
                                <div class="module-heading">
                                    <h4 class="module-title">Contact Us</h4>
                                </div>
                                {/* <!-- /.module-heading --> */}
                                <div class="module-body">
                                    <ul class="toggle-footer">
                                        <li class="media">
                                            <div class="pull-left">
                                                <span class="icon fa-stack fa-lg">
                                                    <i class="fa fa-map-marker fa-stack-1x fa-inverse"></i>
                                                </span>
                                            </div>
                                            <div class="media-body">
                                                <p>#79, Next to Dr.B.R.Ambedkar Bhavan, Bychapura Road, Devanahalli, Bengaluru - 562110</p>
                                            </div>
                                        </li>
                                        <li class="media">
                                            <div class="pull-left">
                                                <span class="icon fa-stack fa-lg">
                                                    <i class="fa fa-mobile fa-stack-1x fa-inverse"></i>
                                                </span>
                                            </div>
                                            <div class="media-body">
                                                <p>{"+91 960 620 2424"}<br />{"+91 960 625 2424"}</p>
                                            </div>
                                        </li>
                                        <li class="media">
                                            <div class="pull-left">
                                                <span class="icon fa-stack fa-lg">
                                                    <i class="fa fa-envelope fa-stack-1x fa-inverse"></i>
                                                </span>
                                            </div>
                                            <div class="media-body">
                                                <span><a href="/#">droghershub2021@gmail.com</a></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- /.module-body --> */}
                            </div>
                            {/* <!-- /.col --> */}
                            <div class="col-xs-12 col-sm-6 col-md-4">
                                <div class="module-heading">
                                    <h4 class="module-title">Customer Service</h4>
                                </div>
                                {/* <!-- /.module-heading --> */}

                                <div class="module-body">
                                    <ul class='list-unstyled'>
                                        <li class="first"><a href="/#" title="Contact us">My Account</a></li>
                                        <li><a href="/#" title="About us">Order History</a></li>
                                        <li><a href="/#" title="faq">FAQ</a></li>
                                        <li><a href="/#" title="Popular Searches">Specials</a></li>
                                        <li class="last"><a href="/#" title="Where is my order?">Help Center</a></li>
                                    </ul>
                                </div>
                                {/* <!-- /.module-body --> */}
                            </div>
                            {/* <!-- /.col --> */}
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="module-heading">
                                    <h4 class="module-title">Why Choose Us</h4>
                                </div>
                                {/* <!-- /.module-heading --> */}
                                <div class="module-body">
                                    <ul class='list-unstyled'>
                                        <li class="first"><a href="/#" title="About us">Shopping Guide</a></li>
                                        <li><a href="/#" title="Blog">Blog</a></li>
                                        <li><a href="/#" title="Company">Company</a></li>
                                        <li><a href="/#" title="Investor Relations">Investor Relations</a></li>
                                        <li class=" last"><Link to="/contact" title="Suppliers">Contact Us</Link></li>
                                    </ul>
                                </div>
                                {/* <!-- /.module-body --> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-bar" style={{ backgroundColor: "#042417" }}>
                    <div class="container">
                        <div class="col-xs-12 col-sm-6 no-padding social">
                            <ul class="link">
                                <li class="fb pull-left"><a target="_blank" rel="nofollow" href="/#" title="Facebook"> </a></li>
                                <li class="tw pull-left"><a target="_blank" rel="nofollow" href="/#" title="Twitter"> </a></li>
                                <li class="googleplus pull-left"><a target="_blank" rel="nofollow" href="/#" title="GooglePlus"> </a></li>
                                {/* <li class="rss pull-left"><a target="_blank" rel="nofollow" href="/#" title="RSS"> </a></li> */}
                                {/* <li class="pintrest pull-left"><a target="_blank" rel="nofollow" href="/#" title="PInterest"> </a></li> */}
                                {/* <li class="linkedin pull-left"><a target="_blank" rel="nofollow" href="/#" title="Linkedin"> </a></li> */}
                                {/* <li class="youtube pull-left"><a target="_blank" rel="nofollow" href="/#" title="Youtube"> </a></li> */}
                            </ul>
                        </div>
                        <div class="col-xs-12 col-sm-6 no-padding">
                            <div class="clearfix payment-methods">
                                <ul>
                                    {/* <li><img src="assets/images/payments/2.png" alt="" /></li> */}
                                    {/* <li><img src="assets/images/payments/1.png" alt="" /></li> */}
                                    <li><img src="assets/images/payments/3.png" alt="" /></li>
                                    <li><img src="assets/images/payments/4.png" alt="" /></li>
                                    {/* <li><img src="assets/images/payments/5.png" alt="" /></li> */}
                                </ul>
                            </div>
                            {/* <!-- /.payment-methods --> */}
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- ============================================================= FOOTER : END============================================================= --> */}
        </div >
    )
}

export default Footer
