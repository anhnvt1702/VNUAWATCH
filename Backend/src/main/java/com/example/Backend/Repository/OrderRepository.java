package com.example.Backend.Repository;

import com.example.Backend.Entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.List;
import java.util.Optional;


public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByCustomerId(Long customerId);
    Optional<Order> findByTrackId(String trackId);

    @Query("""
        SELECT 
            MONTH(o.orderDate) AS month,
            COALESCE(SUM(o.totalOrderValue), 0) AS revenue,
            COUNT(o.orderId) AS orderCount
        FROM Order o
        WHERE o.orderStatus = '6'
        AND YEAR(o.orderDate) = :year
        GROUP BY MONTH(o.orderDate)
        ORDER BY MONTH(o.orderDate)
    """)
    List<Object[]> getMonthlyRevenueAndOrders(@Param("year") int year);
}