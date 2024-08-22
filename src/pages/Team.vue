<template>
    <div class="team-page pb-2 pb-md-1 pt-4">
        <section class="section mt-2 mt-md-0 py-lg-2">
            <div class="section-content">
                <div class="container">
                    <div class="section-title-area text-center">
                        <h2>Our <em class="secondarycolor">Team</em></h2>
                        <div class="description">
                            <p>
                                Panoray Ventures, we are dedicated to empowering the future through decentralized innovations. We firmly believe in unleashing the full potential of Web3 by fostering a culture of collaboration, encouraging continuous innovation, and building trust within the ecosystem.
                            </p>
                        </div>
                    </div>
                    <div class="team-members-block">
                        <div class="content-wrapper">
                            <div class="row d-flex flex-wrap justify-content-center">
                                <div class="member-item col-12 col-md-4">
                                    <div class="item-content">
                                        <div class="figure">
                                            <a href="https://www.linkedin.com/in/pathanjalisharma21" target="_blank">
                                                <img src="@/static/images/members/member1.webp" width="246" height="246" alt="image">
                                            </a>
                                        </div>
                                        <div class="content">
                                            <div class="name">
                                                <h3>Pathanjali Sharma</h3>
                                            </div>
                                            <div class="designation">
                                                <em>Co-Founder & Managing Partner</em>
                                            </div>
                                            <div class="btn-content">
                                                <a href="https://www.linkedin.com/in/pathanjalisharma21" target="_blank" class="text-link">View Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="member-item col-12 col-md-4">
                                    <div class="item-content">
                                        <div class="figure">
                                            <a href="https://www.linkedin.com/in/vignesh-k-80bb195b/" target="_blank">
                                                <img src="@/static/images/members/member2.webp" width="246" height="246" alt="image">
                                            </a>
                                        </div>
                                        <div class="content">
                                            <div class="name">
                                                <h3>Vignesh K.</h3>
                                            </div>
                                            <div class="designation">
                                                <em>Co-Founder & CTO</em>
                                            </div>
                                            <div class="btn-content">
                                                <a href="https://www.linkedin.com/in/vignesh-k-80bb195b/" target="_blank" class="text-link">View Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="member-item col-12 col-md-4">
                                    <div class="item-content">
                                        <div class="figure">
                                            <a href="https://www.linkedin.com/in/akash-m-patil-6a303510b/" target="_blank"> 
                                                <img src="@/static/images/members/member3.webp" width="246" height="246" alt="image">
                                            </a>
                                        </div>
                                        <div class="content">
                                            <div class="name">
                                                <h3>Akash M Patil</h3>
                                            </div>
                                            <div class="designation">
                                                <em>Co-Founder & COO</em>
                                            </div>
                                            <div class="btn-content">
                                                <a href="https://www.linkedin.com/in/akash-m-patil-6a303510b/" target="_blank" class="text-link">View Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="member-item col-12 col-md-4">
                                    <div class="item-content">
                                        <div class="figure">
                                            <a href="https://www.linkedin.com/in/nihal-s-karkera-2b582a17b/" target="_blank">
                                                <img src="@/static/images/members/member4.webp" width="246" height="246" alt="image">
                                            </a>
                                        </div>
                                        <div class="content">
                                            <div class="name">
                                                <h3>Nihal S Karkera</h3>
                                            </div>
                                            <div class="designation">
                                                <em>Chief Marketing Officer</em>
                                            </div>
                                            <div class="btn-content">
                                                <a href="https://www.linkedin.com/in/nihal-s-karkera-2b582a17b/" target="_blank" class="text-link">View Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="member-item col-12 col-md-4">
                                    <div class="item-content">
                                        <div class="figure">
                                            <a href="https://www.linkedin.com/in/shah-muhammad-96621bb5/" target="_blank"> 
                                                <img src="@/static/images/members/member5.webp" width="246" height="246" alt="image">
                                            </a>
                                        </div>
                                        <div class="content">
                                            <div class="name">
                                                <h3>Shah M Babar</h3>
                                            </div>
                                            <div class="designation">
                                                <em>Creative Head</em>
                                            </div>
                                            <div class="btn-content">
                                                <a href="https://www.linkedin.com/in/shah-muhammad-96621bb5/" target="_blank" class="text-link">View Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style lang="scss" scoped>
.team-page{
    .section-title-area{
        .description{
            max-width: 8.5rem;
        }
    }
}
.team-members-block{
    padding: 0.5rem 0 0.3rem;
    .content-wrapper{
        max-width: 10rem;
        margin: 0 auto;
    }
}
.member-item{
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 0.3rem;
    .item-content{
        padding: 0.1rem;
        &:hover{
            .figure{
                margin-top: -0.05rem;
            }
        }
    }
    .figure{
        max-width: 2.45rem;
        margin: 0 auto;
        transition: all 0.3s ease 0s;
    }
    .content{
        padding: 0.2rem 0;
    }
    .name{
        h3{
            margin-bottom: 0.05rem;
        }
    }
    .designation{
        font-weight: 600;
        color: var(--green-color);
    }
    .btn-content{
        padding-top: 0.1rem;
        a.text-link{
            color: var(--darkgray-color);
            display: inline-block;
            vertical-align: top;
            padding: 0.1rem;
            &:hover{
                color: var(--green-color)
            }
        }
    }

}

</style>