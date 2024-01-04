<template>
    <div class="pp-root">
        <div class="content-w">
            <div class="logo">
                <h1>ChatGPT Pro</h1>
                <img src="../../../assets/chatgpt-pro.png" alt="" srcset="">
            </div>
            <br>
            <h1>Privacy Policy</h1>


            <h2 style="text-align: center;">Effective Date: {{ effectiveDate }}</h2>
            <br>

            <section>
                <h3>Information We Collect</h3>

                <div>
                    <p>{{ userProvidedInfo }}</p>
                </div>

                <!-- <div>
                    <h4>Automatically Collected Information</h4>
                    <p>{{ autoCollectedInfo }}</p>
                </div> -->
            </section>

            <!-- <section>
                <h3>How We Use Your Information</h3>
                <p>{{ howWeUseInfo }}</p>
            </section> -->

            <section>
                <h3>Sharing of Your Information</h3>
                <p>{{ sharingInfo }}</p>
            </section>

            <section>
                <h3>Your Choices</h3>
                <p>{{ yourChoices }}</p>
            </section>

            <section>
                <h3>Security</h3>
                <p>{{ securityInfo }}</p>
            </section>

            <section>
                <h3>Changes to This Privacy Policy</h3>
                <p>{{ changesInfo }}</p>
            </section>

            <section>
                <h3>Contact Us</h3>
                <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a
                        href="mailto:rapps.dev@gamil.com">{{
                            contactInformation
                        }}</a></p>
            </section>
            <br>
            <section>
                <p class="thanks"> Thanks for using ChatGPT Pro !</p>
            </section>
            <br><br>
        </div>
    </div>
</template>
  
<script setup>
const effectiveDate = "January, 2023";
const userProvidedInfo = "We collect no user data till date. However, we might update the policy later, when we integrate new features.";
const autoCollectedInfo = "Information about your device, including the device type, operating system, and unique device identifiers. Information about how you use the app, such as the features you access, the time spent on the app, and other usage statistics.";
const howWeUseInfo = "We use the information we collect for various purposes, including providing and maintaining the functionality of the app, improving services, and responding to inquiries.";
const sharingInfo = "We do not sell, trade, or otherwise transfer your personal information to third parties. However, we may share aggregated, non-personal information with third parties for various purposes.";
const yourChoices = "You can control certain information collected through the app. For example, user preferences.";
const securityInfo = "We take reasonable measures to help protect your personal information from unauthorized access, use, or disclosure.";
const changesInfo = "We may update this Privacy Policy from time to time. Any changes will be effective immediately upon the posting of the updated Privacy Policy.";
const contactInformation = "rapps.dev@gmail.com";
</script>
<style lang="scss" scoped>
.pp-root {
    background-color: white;
    height: 100vh;
    width: 100vw;
    overflow-y: auto;

    * {
        color: black;
        margin: 0 auto;
    }

    .content-w {
        width: 40vw;
        padding: 100px 0;

        .thanks {
            font-size: 20px;
            text-align: center;
        }

        .logo {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0;
            gap: 10px;
            justify-content: center;
        }

        img {
            height: 100px;
            width: 100px;
        }

        h1 {
            font-size: 40px;
            text-align: center;
        }

        h2 {
            font-size: 20px;
        }

        h3 {
            font-size: 24px;
        }

        section {
            margin-top: 30px;
        }
    }
}
</style>