-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 07, 2020 at 08:32 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zwallet`
--

-- --------------------------------------------------------

--
-- Table structure for table `topup`
--

CREATE TABLE `topup` (
  `id` int(16) NOT NULL,
  `step` int(16) NOT NULL,
  `instructions` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `topup`
--

INSERT INTO `topup` (`id`, `step`, `instructions`) VALUES
(1, 5, 'update instructions part 2'),
(2, 1, 'Type your security number on the ATM or E-Banking.'),
(4, 3, 'Select “Transfer” in the menu');

-- --------------------------------------------------------

--
-- Table structure for table `transfer`
--

CREATE TABLE `transfer` (
  `id` int(16) NOT NULL,
  `idSender` int(16) NOT NULL,
  `idReceiver` int(16) NOT NULL,
  `amount` varchar(225) NOT NULL,
  `date` timestamp(2) NOT NULL DEFAULT current_timestamp(2),
  `notes` varchar(225) NOT NULL,
  `transaction` varchar(100) NOT NULL DEFAULT 'Transfer'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transfer`
--

INSERT INTO `transfer` (`id`, `idSender`, `idReceiver`, `amount`, `date`, `notes`, `transaction`) VALUES
(1, 1, 1, 'Rp.500000', '2020-10-04 17:56:43.00', 'notes update', 'Transfer'),
(3, 5, 1, 'Rp.90000', '2020-09-27 17:28:33.00', 'asdfg', 'Subcription'),
(4, 1, 5, 'Rp.60000', '2020-09-27 17:29:42.00', '123ass', 'Subcription'),
(7, 1, 6, 'Rp.20000', '2020-09-28 13:48:09.00', 'notes update part2', 'Transfer'),
(13, 1, 6, 'Rp.20000', '2020-09-28 13:48:09.00', 'notes update part2', 'Transfer'),
(14, 6, 8, 'rp.20000', '2020-10-06 18:17:36.00', 'notes...', 'Transfer'),
(15, 6, 8, 'rp.20000', '2020-10-06 18:34:14.68', 'notes...', 'Transfer'),
(62, 14, 1, '1', '2020-10-07 15:55:59.59', '1', 'Transfer');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(16) NOT NULL,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `balance` varchar(255) NOT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT 0,
  `photo` varchar(200) NOT NULL,
  `pin` varchar(10) NOT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updateAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `phone`, `email`, `password`, `balance`, `verified`, `photo`, `pin`, `createdAt`, `updateAt`) VALUES
(1, 'Ahmad ', 'Maulana Yusup', '08121782912', 'asd@gmail.com', '12345', '1000000', 0, 'samuel.svg', '123456', '2020-09-25 07:18:22', '2020-09-25 07:18:22'),
(5, 'Brandon', 'wiliam', '08125667121', 'brandon@gmail.com', '123456', '90000000', 0, 'jessica.svg', '12345', '2020-09-27 14:13:43', '2020-09-27 14:34:48'),
(6, 'Zidanee', 'Alan', '0821213213', 'william@gmail.com', '123456', '7000000', 0, 'samuel.svg', '000000', '2020-09-28 12:20:24', '2020-09-28 12:20:24'),
(8, 'Brams', 'Young', '0821213213', 'william@gmail.com', '123456', '7000000', 0, 'momo.svg', '000000', '2020-09-29 13:14:06', '2020-09-29 13:14:06'),
(14, 'Brams', 'Old', '0821213213', 'william@gmail.com', '33333', '7000000', 0, 'momo.svg', '000000', '2020-09-29 13:14:06', '2020-09-29 13:14:06');

-- --------------------------------------------------------

--
-- Stand-in structure for view `vtransfer`
-- (See below for the actual view)
--
CREATE TABLE `vtransfer` (
`id` int(16)
,`idSender` int(16)
,`idReceiver` int(16)
,`name` varchar(201)
,`photo` varchar(200)
,`phone` varchar(100)
,`balance` varchar(255)
,`amount` varchar(225)
,`date` timestamp(2)
,`notes` varchar(225)
,`transaction` varchar(100)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `vusers`
-- (See below for the actual view)
--
CREATE TABLE `vusers` (
`id` int(16)
,`firstName` varchar(100)
,`lastName` varchar(100)
,`name` varchar(201)
,`phone` varchar(100)
,`email` varchar(100)
,`password` varchar(100)
,`balance` varchar(255)
,`verified` tinyint(1)
,`photo` varchar(200)
,`pin` varchar(10)
,`createdAt` timestamp
,`updateAt` timestamp
);

-- --------------------------------------------------------

--
-- Structure for view `vtransfer`
--
DROP TABLE IF EXISTS `vtransfer`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vtransfer`  AS  select `t`.`id` AS `id`,`t`.`idSender` AS `idSender`,`t`.`idReceiver` AS `idReceiver`,concat_ws(' ',`u`.`firstName`,`u`.`lastName`) AS `name`,`u`.`photo` AS `photo`,`u`.`phone` AS `phone`,`u`.`balance` AS `balance`,`t`.`amount` AS `amount`,`t`.`date` AS `date`,`t`.`notes` AS `notes`,`t`.`transaction` AS `transaction` from (`transfer` `t` join `users` `u` on(`t`.`idReceiver` = `u`.`id`)) ;

-- --------------------------------------------------------

--
-- Structure for view `vusers`
--
DROP TABLE IF EXISTS `vusers`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vusers`  AS  select `users`.`id` AS `id`,`users`.`firstName` AS `firstName`,`users`.`lastName` AS `lastName`,concat_ws(' ',`users`.`firstName`,`users`.`lastName`) AS `name`,`users`.`phone` AS `phone`,`users`.`email` AS `email`,`users`.`password` AS `password`,`users`.`balance` AS `balance`,`users`.`verified` AS `verified`,`users`.`photo` AS `photo`,`users`.`pin` AS `pin`,`users`.`createdAt` AS `createdAt`,`users`.`updateAt` AS `updateAt` from `users` order by `users`.`id` ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `topup`
--
ALTER TABLE `topup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transfer`
--
ALTER TABLE `transfer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `topup`
--
ALTER TABLE `topup`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `transfer`
--
ALTER TABLE `transfer`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
