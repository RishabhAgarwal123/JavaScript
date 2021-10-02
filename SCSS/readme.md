SCSS -

1.  variables: There value are applied directly means they are used directly.
    ex. $primaryColor: #121212;
    It will be used as color: $primaryColor; background: $primaryColor;

2.  We can map that is in javascript it's array that stores the data as key value pairs we can create that in scss.
    ex. $font-weights: (
    "regular": 400,
    "medium": 600,
    "large": 800
    )

    It can used by using map-get(mapName, key);
    ex. font-weight: map-get($font-weights, bold);

3.  SCSS provides the feature for nesting which means we can write one selector inside other selector which is very useful when we have to apply css on a certain element which is inside of the other div or any other class/selector.
    ex. We have a div inside that we multiple selector and we want to apply the css only to the selectors which are inside of the div. then nesting come into action.
    .main {
    width: 300px;
    height: 300px;
    margin: 0 auto;

        p {
            color: #fff;
        }

    }
    As this above example we have <p> tag the css which is wrritten inside that will be applied only to the <p> tage which is inside the .main class selector.
    It provides the shortcut also. let <p> tag has a class name which is main\*\*para which is inside teh div which has a class of main so for nesting we can use
    .main {
    width: 60%;

        &__para: {
        color: #fff;
        }

    }
    This means that '&' will take the 'main' from the parent class helps to find in which conatiner that specific code is written.

4.  For modularity of code we can create separate scss files sometimes we create partials file the insteresting thing of this file is compiler will not create the css files for that. and for this teh file name should start from "\_FileName.scss".
    ex. We can create a reset file with name \_reset.scss which will contain the styles which is applied to whole project.

    - {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      }
      this above piece of code will remove the default css which is applied by the browser.

5.  To import the other scss file into other syntax is @import 'path/filename' filename will come withour any extension.
6.  Best practice is to create a separate file for variables that can be used in any file by importing the variables file.
7.  We can use function also in scss same way as we use in javascript.
    ex. We want to use map-get many times in a scss file so for that we can write a function that will provide the better way for our code. Below is the syntax
    Function Declaration: @function functionName(parameters with $ sign)
    Function call: functionName(arguments)
    example: Function Declaration:
    @function weight($weightName) {
        @return map-get($ffontWeights, $weightName);
    }
    Function Call:
    font-weight: weight(large);
8.  mixin: It's like a function it is used when we have the same code repeating again and again so to use the code we can create the mixin function. Syntax
    Create mixin function by using @mixin PropertyName {styles}
    Call the mixin function by using @include.
    example:Creatign mixin function:
    @mixin flexContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    }
    Calling Mixin function: inside any selector {
    @include flexContainer;
    }
    Similar to unction we can pass arguments into mixin also refter point 7.
9.  Function are used to compute and return values while mixin are used to stop the re writing of code means the styles which are repeating we can us emixin for that and include that.
10. We can use if and else also in scss by @if and @else.
11. lighten($color, $amount) this funtion takes the 2 input the color and the amount which has to be apply to the color wether it's light or dark.
12. darken($color, $amount) this funtion takes the 2 input the color and the amount which has to be apply to the color wether it's light or dark.
13. @content: helps us for content projection we can pass the content into the mixin where we have provided the @content it will recieve their.
14. @extend: In order we want the same styles to be applied onto different selector we can use @extend keyword for that. We can add the sytles of place from where we have extended that and can add styles also.
15. Can perform Math operations also.
    **\*** Note: With sass we can cannot mix different types that is 80% - 80px This will not work in sass. To work they have to be of same types.
