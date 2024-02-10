    
$(document).ready(function () {
              $(".dropdown-trending").click(function () {
                  $(".dropdown-content").slideToggle();
              })
          });
          
          $("#xmark").click(function () {
              $(".menu-xmark-div").hide();
          });
          
          $("#menu-show-btn").click(function () {
              $(".menu-xmark-div").show();
          });
          //     $("#drop_down_box").click(function(){
          //   $(".class-list").toggle();
          // }); 
          $(document).ready(function () {
              $("#drop_down_box").click(function () {
                  $(".class-list").slideToggle("slow");
                  $(".class-list2").hide();
                  $(".class-list3").hide();
                  $(".class-list4").hide();
                  $(".class-list5").hide();
              });
          });
          $(document).ready(function () {
              $("#drop_down_box2").click(function () {
                  $(".class-list2").slideToggle("slow");
                  $(".class-list").hide();
                  $(".class-list3").hide();
                  $(".class-list4").hide();
                  $(".class-list5").hide();
              });
          });
          
          $(document).ready(function () {
              $("#drop_down_box3").click(function () {
                  $(".class-list3").slideToggle("slow");
                  $(".class-list").hide();
                  $(".class-list2").hide();
                  $(".class-list4").hide();
                  $(".class-list5").hide();
              });
          });
          $(document).ready(function () {
              $("#drop_down_box4").click(function () {
                  $(".class-list4").slideToggle("slow");
                  $(".class-list").hide();
                  $(".class-list2").hide();
                  $(".class-list3").hide();
                  $(".class-list5").hide();
              });
          });
          $(document).ready(function () {
              $("#drop_down_box5").click(function () {
                  $(".class-list5").slideToggle("slow");
                  $(".class-list").hide();
                  $(".class-list2").hide();
                  $(".class-list3").hide();
                  $(".class-list4").hide();
              });
          });
          // herat div function
          $(document).ready(function () {
              $(".heart-div-icon").click(function () {
                  $(".heart-div-icon").toggleClass("red_heart");
              })
          });
          // 
          $(document).ready(function () {
              $(".share-icon-div").click(function () {
                  $(".share-div").slideToggle("slow");
                  $(".refresh-meta-data-div").hide();
              });
          });
          $(document).ready(function () {
              $(".more-icon-div").click(function () {
                  $(".refresh-meta-data-div").slideToggle("slow");
                  $(".share-div").hide();
              });
          });
          
          $("#btn0").click(function () {
              $("#photo_0").show();
              $("#photo_1").hide();
              $("#photo_2").hide();
              $("#photo_3").hide();
              $("#photo_4").hide();
              $("#photo_5").hide();
              $("#photo_6").hide();
              $("#photo_7").hide();
              $(".activity-btn").hide();
                $("#card1").show();
                  $("#card2").show();
                  $("#card3").show();
                  $("#card4").show();
                  $("#card5").show();
                  $("#card6").show();
                  $("#card7").show();
                  $("#card8").show();
          });
          $("#btn1").click(function () {
              $("#photo_1").css("display", "flex");
              $("#photo_1").show();
              $("#collections-btn").hide();
              $("#photo_0").hide();
              $("#photo_2").hide();
              $("#photo_3").hide();
              $("#photo_4").hide();
              $("#photo_5").hide();
              $("#photo_6").hide();
              $("#photo_7").hide();
              $(".activity-btn").hide();
          
          });
          $("#btn2").click(function () {
              $("#photo_2").css("display", "flex");
              $("#photo_2").show();
              $("#collections-btn").hide();
              $("#photo_0").hide();
              $("#photo_1").hide();
              $("#photo_3").hide();
              $("#photo_4").hide();
              $("#photo_5").hide();
              $("#photo_6").hide();
              $("#photo_7").hide();
              $(".activity-btn").hide();
          });
          $("#btn3").click(function () {
              $("#photo_3").css("display", "flex");
              $("#photo_3").show();
              $("#collections-btn").hide();
              $("#photo_0").hide();
              $("#photo_1").hide();
              $("#photo_2").hide();
              $("#photo_4").hide();
              $("#photo_5").hide();
              $("#photo_6").hide();
              $("#photo_7").hide();
              $(".activity-btn").hide();
          });
          $("#btn4").click(function () {
              $("#photo_4").css("display", "flex");
              $("#photo_4").show();
              $("#collections-btn").hide();
              $("#photo_0").hide();
              $("#photo_1").hide();
              $("#photo_2").hide();
              $("#photo_3").hide();
              $("#photo_5").hide();
              $("#photo_6").hide();
              $("#photo_7").hide();
              $(".activity-btn").hide();
          });
          $("#btn5").click(function () {
              $("#photo_5").css("display", "flex");
              $("#photo_5").show();
              $("#collections-btn").hide();
              $("#photo_0").hide();
              $("#photo_1").hide();
              $("#photo_2").hide();
              $("#photo_3").hide();
              $("#photo_4").hide();
              $("#photo_6").hide();
              $("#photo_7").hide();
              $(".activity-btn").hide();
          });
          $("#btn6").click(function () {
              $("#photo_6").css("display", "flex");
              $("#photo_6").show();
              $("#collections-btn").hide();
              $("#photo_0").hide();
              $("#photo_1").hide();
              $("#photo_2").hide();
              $("#photo_3").hide();
              $("#photo_4").hide();
              $("#photo_5").hide();
              $("#photo_7").hide();
              $(".activity-btn").hide();
          });
          $("#btn7").click(function () {
              $("#photo_7").css("display", "flex");
              $("#photo_7").show();
              $("#collections-btn").hide();
              $("#photo_0").hide();
              $("#photo_1").hide();
              $("#photo_2").hide();
              $("#photo_3").hide();
              $("#photo_4").hide();
              $("#photo_5").hide();
              $("#photo_6").hide();
              $(".activity-btn").hide();
          });
          
          $(".price-tag-btn").click(function () {
              $("#collections-btn").css("display", "flex");
              $("#collections-btn").show();
              $("#photo_0").hide();
              $("#photo_1").hide();
              $("#photo_2").hide();
              $("#photo_3").hide();
              $("#photo_4").hide();
              $("#photo_5").hide();
              $("#photo_6").hide();
              $(".eth-navbar").hide();
              $(".eth-img-container-div").hide();
              $(".activity-btn").hide();
          });
          
          $(".onsale").click(function () {
              $("#collections-btn").css("display", "flex");
              $("#collections-btn").hide();
              $("#photo_0").show();
              $("#photo_1").hide();
              $("#photo_2").hide();
              $("#photo_3").hide();
              $("#photo_4").hide();
              $("#photo_5").hide();
              $("#photo_6").hide();
              $(".eth-navbar").show();
              $(".activity-btn").hide();
              $(".eth-img-container-div").show();
          });
          
          $(".avt").click(function () {
              $(".activity-btn").css("display", "flex");
              $("#collections-btn").hide();
              $(".activity-btn").show();
              $("#photo_0").hide();
              $("#photo_1").hide();
              $("#photo_2").hide();
              $("#photo_3").hide();
              $("#photo_4").hide();
              $("#photo_5").hide();
              $("#photo_6").hide();
              $(".eth-navbar").hide();
              $(".eth-img-container-div").hide();
          });
          // activity  btn click part.
          $(".check-btn").click(function(){
          $("#prch-icon").css("display","flex");
          $("#prch-icon").show();
          $("#avater2").hide();
          $("#avater1").show();
          $("#avater3").show();
          $("#avater4").hide();
          $("#avater5").hide();
          $(".hide1").hide();
          $("#hide-ps").show();
          $("#price-tag-icon").hide();
          $("#ava-arrow1").hide();
          $("#avater6").hide();
          })
          $(".check1").click(function(){
              $("#price-tag-icon").css("display","flex");
              $("#price-tag-icon").show();
              $("#avater3").hide();
              $("#avater2").show();
              $("#avater4").hide();
              $("#avater5").hide();
              $("#hide-ps").hide();
              $("#avater1").show();
              $("#avater6").hide();
              $("#price-tagss").show();
          
              });
              $(".check2").click(function(){
                  $("#price-tag-icon").css("display","flex");
                  $("#price-tag-icon").hide();
                  $("#avater3").show();
                  $("#avater2").hide();
                  $("#avater4").hide();
                  $("#avater5").show();
                  $("#avater1").hide();
                  $("#hide-ps").show();
                  $(".hide1").show();
                  $("#prch-icon").hide();
                  $("#ava-arrow").hide();
                  $("#hammer-icon2").hide();
                  $("#avater6").hide();
                  $("#ava-arrow1").hide();
                  // ava-arrow
                  });
           $(".check3").click(function(){
              $("#hammer-icon2").css("display","flex");
              $("#price-tag-icon").hide();
              $("#avater3").hide();
              $("#avater2").show();
              $("#avater4").show();
              $("#avater5").hide();
              $("#avater6").show();
              $("#avater1").hide();
              $("#hide-ps").show();
              $(".hide1").hide();
              $("#hammer-icon").show();
              $("#hammer-icon2").show();
              $("#prch-icon").hide();
              $("#price-tagss").hide();
              $("#ava-arrow2").hide();
           });
           $(".check4").click(function(){
              $("#ava-arrow1").css("display","flex");
              $("#price-tag-icon").hide();
              $("#avater1").hide();
              $("#avater2").hide();
              $("#avater3").show();
              $("#avater4").hide();
              $("#avater5").show();
              $("#avater6").show();
              $("#hide-ps").hide();
              $(".hide1").hide();
              $("#hammer-icon").hide();
              $("#hammer-icon2").hide();
              $("#prch-icon").hide();
              $("#ava-arrow").show();
              $("#price-tagss").hide();
              $("#ava-arrow2").show();
           });
          $(document).ready(function(){
              $(".ALL").click(function(){

                  $("#avater1").show();
                  $("#avater2").show();
                  $("#avater3").show();
                  $("#avater4").show();
                  $("#avater5").show();
                  $("#avater6").hide();
                  $("#ava-arrow").show();
                  $("#ava-arrow1").hide();
                  $(".hide1").show();
                  $("#hide1").hide();
                  $("#hammer-icon2").hide();
                  $("#price-tagss").show();
                  $("#prch-icon").hide();
                  $("#price-tag-icon").hide();
                  $("#hide-ps").show();
                  $("#card1").show();
                  $("#card2").show();
                  $("#card3").show();
                  $("#card4").show();
                  $("#card5").show();
                  $("#card6").show();
                  $("#card7").show();
                  $("#card8").show();
              })
          })

// $(document).ready(function(){
//     $("#center1").click(function(){
//         $("#card1").show();
//         $("#card2").hide();
//         $("#card3").show();
//         $("#card4").hide();
//         $("#card5").show();
//         $("#card6").show();
//         $("#card7").hide();
//         $("#card8").show();
//     })
// })

