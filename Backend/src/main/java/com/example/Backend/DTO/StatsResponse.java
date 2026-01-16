package com.example.Backend.DTO;

import java.util.List;

public class StatsResponse {
    private long userCount;
    private long orderCount;
    private long productCount;


    private List<MonthlyStatsDTO> monthlyStats;

    public StatsResponse(long userCount, long orderCount, long productCount,
                         List<MonthlyStatsDTO> monthlyStats) {
        this.userCount = userCount;
        this.orderCount = orderCount;
        this.productCount = productCount;
        this.monthlyStats = monthlyStats;
    }

    public List<MonthlyStatsDTO> getMonthlyStats() {
        return monthlyStats;
    }

    public void setMonthlyStats(List<MonthlyStatsDTO> monthlyStats) {
        this.monthlyStats = monthlyStats;
    }

    public void setOrderCount(long orderCount) {
        this.orderCount = orderCount;
    }

    public void setProductCount(long productCount) {
        this.productCount = productCount;
    }

    public void setUserCount(long userCount) {
        this.userCount = userCount;
    }

    public long getUserCount() {
        return userCount;
    }

    public long getOrderCount() {
        return orderCount;
    }

    public long getProductCount() {
        return productCount;
    }
}
