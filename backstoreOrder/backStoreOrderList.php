<?php
session_start();

if($_SESSION['loggedIn']){
    
}
    //allow
else{
    //redirect to the login page
    header('Refresh:1;url=../index.php');
    // header('Location: /index.php'); 
  }
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <title>Concordia Store</title>
    <link rel="stylesheet" type="text/css" href="style/backStore.css">
    <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.css">
</head>
<style type="text/css">



</style>

<body>

    <h1 style="color:red;">Back Store Mangement</h1>



    <div class="navbar">
        <a href="../index.php">Home</a>
        <a href="../backstoreProducts/backStoreProductsList.php">Product List</a>
        <a href="../backStoreUserList/backStoreUserList.php">User List</a>
        <a href="backStoreOrderList.php">Order List</a>
        <div class="subnav">
            <button class="subnavbtn">About <i class="fa fa-caret-down"></i></button>
            <div class="subnav-content">
                <a href="#company">Company</a>
                <a href="#team">Team</a>
                <a href="#">Careers</a>
                <a href="#">HR</a>
            </div>
        </div>


        <a href="">Contact</a>
        <?php
        if (isset($_SESSION['adminname'])) {
            $admin2 = $_SESSION['adminname'];
            echo "<h2 align='left'> <font color= #red font face='mambo' size='5pt'>
    &nbsp;&nbsp;&nbsp;&nbsp; $admin2 is logged in</font> </h2>";
        }
        ?>
    </div>



    <!-- editing from here -->




    <div class="container">
        <h2 class="page-header text-center" style="color:red;">Order Manage</h2>
        <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
                <a href="#addnew" class="btn btn-primary" data-toggle="modal"><span class="glyphicon glyphicon-plus"></span> New</a>
                <?php
                session_start();
                if (isset($_SESSION['message'])) {
                ?>
                    <div class="alert alert-info text-center" style="margin-top:20px;">
                        <?php echo $_SESSION['message']; ?>
                    </div>
                <?php

                    unset($_SESSION['message']);
                }
                ?>
                <table class="table table-bordered table-striped" style="margin-top:20px;">
                    <thead>
                        <th>Order #</th>
                        <th>Customer ID#</th>
                        <th>Items</th>
                        <th>Total Prices (CND)</th>
                    </thead>


                    <tbody>
                        <?php
                        //load xml file
                        $xml = simplexml_load_file('../database/orderlist.xml');

                        foreach ($xml->order as $row) {
                        ?>
                            <tr>


                                <td><?php echo $row->id; ?></td>
                                <td><?php echo $row->customer; ?></td>
                                <td><?php echo $row->products; ?></td>
                                <td><?php echo $row->totalprice; ?></td>

                                <td>
                                    <a href="#edit_<?php echo $row->id; ?>" data-toggle="modal" class="btn btn-success btn-sm"><span class="glyphicon glyphicon-edit"></span> Edit</a>
                                    <a href="#delete_<?php echo $row->id; ?>" data-toggle="modal" class="btn btn-danger btn-sm"><span class="glyphicon glyphicon-trash"></span> Delete</a>
                                </td>
                                <?php include('edit_delete_modal.php'); ?>
                            </tr>
                        <?php
                        }

                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <?php include('add_modal.php'); ?>
    <script src="jquery.min.js"></script>
    <script src="bootstrap/js/bootstrap.min.js"></script>
</body>

</html>