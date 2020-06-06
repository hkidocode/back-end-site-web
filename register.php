<!DOCTYPE html>
<html lang="en">

<?php 
$page_title = "The Perfect Cup - Register";
include("inc/header.php");
?>

<body>

    <div class="brand">The Perfect Cup</div>
    <div class="address-bar">3481 Melrose Place | Beverly Hills, CA 90210 | 123.456.7890</div>

    <!-- Navigation -->
    <nav class="navbar navbar-default" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <!-- navbar-brand is hidden on larger screens, but visible when the menu is collapsed -->
                <a class="navbar-brand" href="index.php">The Perfect Cup</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                    <li>
                        <a href="index.php">Home</a>
                    </li>
                    <li>
                        <a href="about.php">About</a>
                    </li>
                    <li>
                        <a href="blog.php">Blog</a>
                    </li>
                    <li>
                        <a href="contact.php">Contact</a>
                    </li>
                    <li>
                        <a href="login.php">Login</a>
                    </li>
                    <li>
                        <a href="register.php">Register</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>

    <div class="container">

        <div class="row">
            <div class="box">
                <div class="col-lg-12">
                    <hr>
                    <h2 class="intro-text text-center"><strong>Register</srong></h2>
                    <hr>
                    <div id="add_err2"></div>
                    <form role="form" id="registrationForm" method="post" action="success_registration.php">
                        <div class="row">
                            <div class="form-group col-lg-4">
                                <label>Full Name</label>
                                <input type="text" id="fname" name="fname" maxlength="25" class="form-control">
			                    <small class="message-small"></small>
                            </div>
                            <div class="form-group col-lg-4">
                                <label>Email Address</label>
                                <input type="email" id="email" name="email" maxlength="25" class="form-control">
			                    <small class="message-small"></small>
                            </div>

                            <div class="clearfix"></div>

                            <div class="form-group col-lg-4">
                                <label>Password</label>
                                <input type="password" id="password" name="password" maxlength="25" class="form-control">
			                    <small class="message-small"></small>
                            </div>
                            <div class="form-group col-lg-4">
                                <label>Confirm Password</label>
                                <input type="password" id="cpassword" name="password" maxlength="25" class="form-control">
			                    <small class="message-small"></small>
                            </div>
                            <div class="form-group col-lg-12">
                                <button type="submit" id="register" class="btn btn-default">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
    <!-- /.container -->

    <?php 
        include("inc/footer.php");
    ?>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Registrer Validation -->
    <script src="js/registration.js"></script>

</body>

</html>