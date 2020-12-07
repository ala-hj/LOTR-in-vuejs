<template>
  <div class="about">
    <div class="social-media">
      <img
        style="
          width: 250px;
          height: 250px;
          vertical-align: middle;
          margin-right: 40px;
          border-radius: 50%;
        "
        src="@/assets/personal_image.jpg"
        
      />
      <el-link href="https://github.com/scardeath" target="_blank"  type="info">GitHub</el-link>
      -
      <el-link href="https://www.linkedin.com/in/ala-alhaj/" type="primary">LinkedIn</el-link> -
      <el-link type="danger" href="https://alla-hajj.medium.com/">
        Meduim
      </el-link>
    </div>

    <h2>Who Am I</h2>
    <div>
      <p>
        My name is Ala Alhaj or sometimes people call me Ali :). I am really
        passion at solving tech problems and expand my knoweledge at software
        developing.
      </p>
    </div>
    <h2>Education Background</h2>
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="2012 - 2015" placement="top">
          <el-card>
            <div slot="header" class="clearfix">
              <b>KFUPM - Dammam Community College</b>: Associate's degree in
              Computer & Information Technology "CIT"
            </div>
            <div class="text item">
              Mixed education background between programming skills and
              adminstration as well where mainly focus at the market needs such
              as server adminstration, networking, and programming as well.
              <div class="grade">3.55 out of 4, "Second Honor"</div>
            </div>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2017-2020" placement="top">
          <el-card>
            <div slot="header" class="clearfix">
              <b>University of Lodz</b>: Computer Science
            </div>
            <div class="text item">
              Typical CS Degree where it focus at understanding every aspect of
              CS: Math, algorthims, DS, DB, Programming skills such as OOP, and
              many to name that makes a student establishs pro-career.
              <div class="grade">4.4 out of 5</div>
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    <h2>Experiance & Projects</h2>
    <div class="block">
      <el-timeline>
        <el-timeline-item
          timestamp="Atharshop - Flutter Applcation"
          placement="top"
        >
          <el-card>
            <div class="text item">
              <el-link
                :underline="false"
                href="https://apps.apple.com/us/app/%D8%B2%D9%87%D8%B1%D8%A9-%D8%A7%D8%B0%D8%A7%D8%B1/id1500201713"
                >IOS</el-link
              >
              /
              <el-link
                href="https://play.google.com/store/apps/details?id=com.atharshop.flutterapp&hl=ar"
                :underline="false"
                >Android</el-link
              > . Fully developed E-Commerce application for saudi Market by delivering promised features such as: purchase platform, ability of sig-in by mobile phones / Apple ID / Google account, preview and share products, Filtering, Notification, and etc..
            </div>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="Custom WordPress Plugins" placement="top">
          <el-card>
            <div class="text item">
              Developing custom plugins for some customer to meet their needs
              since paid/free tools are not giving what is required.
            </div>
          </el-card>
        </el-timeline-item>
         <el-timeline-item timestamp="Fujitsu: 2019 - presenet" placement="top">
          <el-card>
            <div class="text item">
              Starts as Service Desk: 1st line with English , recently 2nd line expert :). Maybe not big deal, but the road to the success just started.
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
};
</script>

<style scoped>
.about {
  font-family: "Courier New", Courier, monospace;
}
.social-media {
  font-size: 40px;
  margin-left: 40px;
  letter-spacing: 5px;
}
.grade {
  font-weight: 800;
}
</style>